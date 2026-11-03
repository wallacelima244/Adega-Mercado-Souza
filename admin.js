(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const db = window.SouzaDB;
  const labels = new Map(db.categories);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const money = n => (n / 100).toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
  const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const seed = window.SOUZA_CATALOGO_INICIAL || [];
  function newId() {
    if (crypto.randomUUID) return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64; bytes[8] = (bytes[8] & 63) | 128;
    const hex = [...bytes].map(n => n.toString(16).padStart(2,'0')).join('');
    return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
  }
  const form = $('#product-form');
  let products = [], demo = false, editing = null, deleting = null;
  let imageUrl = '', newPhoto = null, previewUrl = null, editorBaseline = '', busy = false, toastTimer;

  function notify(message) {
    const el = $('#admin-toast'); el.textContent = message; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3800);
  }
  function errorText(error) {
    if (error?.code === '23505') return 'Este produto já foi cadastrado. Atualize a lista antes de tentar novamente.';
    if (error?.code === '42501' || error?.status === 403) return 'Seu acesso não permite esta alteração. Verifique a permissão de administrador.';
    if (error?.code === '42P01' || error?.code === 'PGRST205') return 'As tabelas ainda não foram criadas. Siga o passo 2 do guia de configuração.';
    if (error?.message === 'conflict') return 'Este produto foi alterado em outra tela. Feche a edição, atualize a lista e tente novamente.';
    if (error instanceof TypeError || /fetch|network|timeout/i.test(error?.message || '')) return 'Não foi possível conectar. Confira a internet e tente novamente.';
    if (error?.name === 'ValidationError' || error?.name === 'Error') return error.message;
    return 'Não foi possível concluir. Confira a conexão e as permissões do banco e tente novamente.';
  }
  function showError(selector, message) { $(selector).textContent = message; $(selector).hidden = !message; }
  function loadingButton(button, loading, label) { button.disabled = loading; button.textContent = loading ? 'Aguarde…' : label; }
  function authView() {
    products = []; render();
    $('#dashboard').hidden = true; $('#auth-view').hidden = false;
    $('#product-editor').close(); $('#delete-dialog').close();
    $('#login-form').reset();
    $('#login-form').elements.password.type = 'password';
    $('#show-password').textContent = 'Mostrar';
    $('#show-password').setAttribute('aria-label','Mostrar senha');
    $('#show-password').setAttribute('aria-pressed','false');
  }
  async function verifyAdmin() {
    const client = db.getClient();
    const {data: userData, error: userError} = await client.auth.getUser();
    if (userError || !userData?.user) throw new Error('Sua sessão terminou. Entre novamente.');
    const {data: allowed, error} = await client.rpc('souza_is_admin');
    if (error) throw new Error('O banco ainda precisa ser configurado. Siga o guia e execute os arquivos SQL.');
    if (allowed !== true) throw new Error('Esta conta ainda não tem permissão de administrador. Peça ao responsável para liberar seu email.');
    return userData.user;
  }
  async function openDashboard(user, isDemo = false) {
    demo = isDemo;
    $('#demo-banner').hidden = !demo;
    $('#demo-editor-note').hidden = !demo;
    $('#account-email').textContent = demo ? 'Demonstração' : user.email;
    $('#auth-view').hidden = true; $('#dashboard').hidden = false;
    showError('#dashboard-error', '');
    if (demo) {
      products = seed.map(p => ({...p}));
      $('#loading-products').hidden = true; $('#import-note').hidden = true;
      render();
    } else await reload();
  }
  async function reload() {
    if (demo) return notify('Demonstração: os produtos desta tela não são enviados para a loja.');
    const button = $('#refresh-products'); button.disabled = true;
    $('#loading-products').hidden = false;
    showError('#dashboard-error', '');
    try {
      products = await db.listProducts(true);
      render();
      $('#import-note').hidden = products.length !== 0;
    } catch (error) { showError('#dashboard-error', errorText(error)); }
    finally { $('#loading-products').hidden = true; button.disabled = false; }
  }
  function render() {
    const counts = {
      total: products.length,
      available: products.filter(p => p.active && p.available).length,
      soldout: products.filter(p => p.active && !p.available).length,
      featured: products.filter(p => p.active && p.featured).length
    };
    Object.entries(counts).forEach(([key, n]) => $('#stat-' + key).textContent = n);
    const search = norm($('#product-search').value.trim());
    const category = $('#category-filter').value, status = $('#status-filter').value;
    const filtered = products.filter(p => {
      if (category !== 'all' && category !== p.category) return false;
      if (status === 'available' && (!p.active || !p.available)) return false;
      if (status === 'soldout' && (!p.active || p.available)) return false;
      if (status === 'hidden' && p.active) return false;
      if (status === 'featured' && (!p.active || !p.featured)) return false;
      return norm(p.name + ' ' + p.detail + ' ' + labels.get(p.category)).includes(search);
    }).sort((a,b) => a.position - b.position || a.name.localeCompare(b.name,'pt-BR'));
    $('#product-count').textContent = products.length;
    $('#product-rows').innerHTML = filtered.map(p => {
      const statusLabel = !p.active ? 'Oculto' : p.available ? 'À venda' : 'Esgotado';
      const statusClass = !p.active ? 'hidden-status' : p.available ? '' : 'soldout';
      const photo = demo && String(p.image_url).startsWith('blob:') ? p.image_url : db.safeImage(p.image_url, p.id);
      return `<tr><td><div class="product-cell"><img class="product-thumb" src="${esc(photo)}" alt="" loading="lazy"><div><strong>${esc(p.name)}${p.featured ? '<span class="star" title="Em destaque">★</span>' : ''}</strong><small>${esc(p.detail || p.unit)}</small></div></div></td><td><span class="category-tag">${esc(labels.get(p.category))}</span></td><td class="price-cell">${money(p.price)}</td><td><span class="status-tag ${statusClass}">${statusLabel}</span></td><td><div class="row-actions"><button data-edit="${esc(p.id)}" aria-label="Editar ${esc(p.name)}">Editar</button><button class="delete-button" data-delete="${esc(p.id)}" aria-label="Excluir ${esc(p.name)}" title="Excluir produto">×</button></div></td></tr>`;
    }).join('');
    $('#product-table').hidden = filtered.length === 0;
    $('#empty-products').hidden = filtered.length !== 0;
    $('#empty-description').textContent = products.length ? 'Tente outra busca ou altere os filtros.' : 'Cadastre o primeiro produto para começar.';
    $('#results-label').textContent = `${filtered.length} de ${products.length} produtos`;
  }
  function snapshot() {
    return JSON.stringify([...new FormData(form).entries()].filter(([name]) => name !== 'photo')) + imageUrl + !!newPhoto;
  }
  function releasePreview() { if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; } }
  function openEditor(product = null) {
    editing = product ? {...product} : null;
    form.reset();
    imageUrl = product?.image_url || ''; newPhoto = null; releasePreview();
    for (const name of ['name','detail','category','price','unit','position']) {
      form.elements[name].value = name === 'price' ? (product ? (product.price / 100).toFixed(2).replace('.', ',') : '')
        : product?.[name] ?? ({category:'beer',unit:'unidade',position:products.length ? Math.max(...products.map(p => p.position)) + 1 : 0}[name] ?? '');
    }
    for (const name of ['active','available','featured']) form.elements[name].checked = product ? product[name] : name !== 'featured';
    $('#product-photo').value = '';
    $('#photo-preview').src = db.safeImage(imageUrl, product?.id || editing);
    $('#editor-title').textContent = product ? 'Editar produto' : 'Novo produto';
    $('#save-product').textContent = demo ? 'Aplicar na demonstração ✓' : 'Salvar produto ✓';
    showError('#editor-error','');
    editorBaseline = snapshot();
    $('#product-editor').showModal();
    form.elements.name.focus({preventScroll:true});
  }
  function closeEditor() {
    if (busy) return;
    if (snapshot() !== editorBaseline && !window.confirm('Descartar as alterações que ainda não foram salvas?')) return;
    $('#product-editor').close(); releasePreview(); newPhoto = null;
  }
  async function optimizePhoto(file) {
    if (!['image/jpeg','image/png','image/webp'].includes(file.type)) throw new Error('Escolha uma foto JPG, PNG ou WebP.');
    if (file.size > 15 * 1024 * 1024) throw new Error('A foto é muito grande. Escolha uma imagem de até 15 MB.');
    const objectUrl = URL.createObjectURL(file);
    try {
      const image = new Image(); image.src = objectUrl;
      await image.decode();
      const scale = Math.min(1, 1600 / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', .85));
      if (!blob || blob.size > 5 * 1024 * 1024) throw new Error('Não foi possível ajustar a foto. Escolha outra imagem menor.');
      return blob;
    } catch (error) {
      if (error?.name === 'EncodingError') throw new Error('Não foi possível abrir esta foto. Tente outra imagem.');
      throw error;
    } finally { URL.revokeObjectURL(objectUrl); }
  }
  async function uploadPhoto(blob) {
    const client = db.getClient();
    const extension = blob.type === 'image/png' ? 'png' : blob.type === 'image/jpeg' ? 'jpg' : 'webp';
    const path = `produtos/${newId()}.${extension}`;
    const {error} = await client.storage.from('souza-produtos').upload(path, blob, {contentType:blob.type,upsert:false,cacheControl:'31536000'});
    if (error) throw error;
    return client.storage.from('souza-produtos').getPublicUrl(path).data.publicUrl;
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || !form.reportValidity()) return;
    let input;
    try {
      input = db.validateProduct({
        name:form.elements.name.value, detail:form.elements.detail.value, category:form.elements.category.value,
        price:db.parsePrice(form.elements.price.value), unit:form.elements.unit.value,
        image_url:imageUrl, position:form.elements.position.value,
        active:form.elements.active.checked, available:form.elements.available.checked, featured:form.elements.featured.checked
      });
    } catch (error) { showError('#editor-error',errorText(error)); return; }
    busy = true; showError('#editor-error','');
    const controls = [...form.querySelectorAll('input,select,textarea,button')];
    controls.forEach(el => el.disabled = true);
    const button = $('#save-product'); button.textContent = demo ? 'Aplicando…' : 'Salvando…';
    try {
      let saved;
      if (demo) {
        if (newPhoto) input.image_url = previewUrl;
        saved = {...input, id:editing?.id || newId(), revision:(editing?.revision || 0) + 1};
      } else {
        if (newPhoto) {
          imageUrl = await uploadPhoto(newPhoto); input.image_url = imageUrl; newPhoto = null;
        }
        let query = editing ? db.getClient().from('souza_products').update(input).eq('id',editing.id).eq('revision',editing.revision)
          : db.getClient().from('souza_products').insert(input);
        const {data,error} = await query.select();
        if (error) throw error;
        if (!data?.length) throw new Error('conflict');
        saved = data[0];
      }
      const index = products.findIndex(p => p.id === saved.id);
      if (index < 0) products.push(saved); else products[index] = saved;
      // Keep demo object URLs alive until the demo is closed, so its rows keep their images.
      if (demo && newPhoto) previewUrl = null; else releasePreview();
      newPhoto = null; $('#product-editor').close(); $('#import-note').hidden = true;
      render(); notify(demo ? 'Demonstração atualizada. Nada foi enviado para a loja.' : 'Produto salvo. O catálogo da loja já pode buscar a atualização.');
    } catch (error) { showError('#editor-error',errorText(error)); }
    finally {
      busy = false; controls.forEach(el => el.disabled = false);
      button.textContent = demo ? 'Aplicar na demonstração ✓' : 'Salvar produto ✓';
    }
  });

  $('#product-photo').addEventListener('change', async event => {
    const file = event.target.files?.[0]; if (!file || busy) return;
    const button = $('#save-product'); button.disabled = true; busy = true;
    showError('#editor-error','');
    try {
      newPhoto = await optimizePhoto(file); releasePreview();
      previewUrl = URL.createObjectURL(newPhoto); $('#photo-preview').src = previewUrl;
    } catch (error) { showError('#editor-error',errorText(error)); }
    finally { busy = false; button.disabled = false; }
  });
  $('#remove-photo').addEventListener('click', () => {
    if (busy) return; releasePreview(); newPhoto = null; imageUrl = '';
    $('#product-photo').value = ''; $('#photo-preview').src = db.safeImage('');
  });
  document.addEventListener('click', event => {
    if (event.target.closest('[data-new]')) return openEditor();
    const edit = event.target.closest('[data-edit]');
    if (edit) { const p = products.find(p => p.id === edit.dataset.edit); if (p) openEditor(p); return; }
    const remove = event.target.closest('[data-delete]');
    if (remove) {
      deleting = products.find(p => p.id === remove.dataset.delete); if (!deleting) return;
      $('#delete-description').textContent = `“${deleting.name}” será removido do catálogo. Esta ação não pode ser desfeita pelo painel.`;
      showError('#delete-error',''); $('#delete-dialog').showModal(); $('#cancel-delete').focus();
    }
  });
  $('#delete-form').addEventListener('submit', async event => {
    event.preventDefault(); if (!deleting || busy) return;
    busy = true; loadingButton($('#confirm-delete'),true,'Excluir produto'); $('#cancel-delete').disabled = true;
    try {
      if (!demo) {
        const {data,error} = await db.getClient().from('souza_products').delete().eq('id',deleting.id).eq('revision',deleting.revision).select('id');
        if (error) throw error;
        if (!data?.length) throw new Error('conflict');
      }
      products = products.filter(p => p.id !== deleting.id);
      render(); $('#delete-dialog').close();
      notify(demo ? 'Produto removido desta demonstração.' : 'Produto excluído do catálogo.');
    } catch (error) { showError('#delete-error',errorText(error)); }
    finally { busy = false; loadingButton($('#confirm-delete'),false,'Excluir produto'); $('#cancel-delete').disabled = false; }
  });
  $('#cancel-delete').onclick = () => $('#delete-dialog').close();
  $('#delete-dialog').addEventListener('cancel', event => { if (busy) event.preventDefault(); });
  $('#close-editor').onclick = closeEditor; $('#cancel-editor').onclick = closeEditor;
  $('#product-editor').addEventListener('cancel', event => { event.preventDefault(); closeEditor(); });
  window.addEventListener('beforeunload', event => {
    if (busy || ($('#product-editor').open && snapshot() !== editorBaseline)) { event.preventDefault(); event.returnValue = ''; }
  });
  for (const id of ['product-search','category-filter','status-filter']) $('#' + id).addEventListener(id === 'product-search' ? 'input' : 'change', render);
  $('#refresh-products').onclick = reload;
  $('#show-password').onclick = () => {
    const input = $('#login-form').elements.password;
    const show = input.type === 'password'; input.type = show ? 'text' : 'password';
    $('#show-password').textContent = show ? 'Ocultar' : 'Mostrar';
    $('#show-password').setAttribute('aria-label',show ? 'Ocultar senha' : 'Mostrar senha');
    $('#show-password').setAttribute('aria-pressed',String(show));
  };
  $('#open-demo').onclick = () => openDashboard(null,true);
  $('#exit-demo').onclick = () => { demo = false; authView(); };
  $('#logout').onclick = async () => {
    if (demo) { demo = false; return authView(); }
    try { const {error} = await db.getClient().auth.signOut({scope:'local'}); if (error) throw error; authView(); }
    catch { notify('Não foi possível encerrar o acesso. Tente novamente.'); }
  };
  $('#login-form').addEventListener('submit',async event => {
    event.preventDefault(); if (!db.configured) return;
    const form = event.currentTarget, button = $('#login-submit');
    loadingButton(button,true,'Entrar no painel →'); showError('#login-error','');
    try {
      const {error} = await db.getClient().auth.signInWithPassword({email:form.elements.email.value.trim(),password:form.elements.password.value});
      form.elements.password.value = '';
      if (error) { if (error.status === 400 || error.code === 'invalid_credentials') throw new Error('Email ou senha não conferem. Confira e tente novamente.'); throw error; }
      const user = await verifyAdmin();
      await openDashboard(user);
    } catch (error) { showError('#login-error',errorText(error)); }
    finally { loadingButton(button,false,'Entrar no painel →'); }
  });
  $('#import-products').onclick = async () => {
    if (demo || busy) return;
    if (!window.confirm('Importar as 45 opções do catálogo atual? Produtos que já existem não serão sobrescritos.')) return;
    busy = true; loadingButton($('#import-products'),true,'Importar catálogo atual');
    try {
      const rows = seed.map(({revision,...p}) => p);
      const {error} = await db.getClient().from('souza_products').upsert(rows,{onConflict:'id',ignoreDuplicates:true});
      if (error) throw error;
      await reload();
      if (products.length) notify('Catálogo importado. Você já pode editar seus produtos.');
    } catch (error) { showError('#dashboard-error',errorText(error)); }
    finally { busy = false; loadingButton($('#import-products'),false,'Importar catálogo atual'); }
  };
  const options = db.categories.map(([id,label]) => `<option value="${id}">${esc(label)}</option>`).join('');
  form.elements.category.innerHTML = options;
  $('#category-filter').insertAdjacentHTML('beforeend',options);
  $('#setup-note').hidden = db.configured;
  $('#login-submit').disabled = !db.configured;
  $('#login-form').querySelectorAll('input').forEach(input => input.disabled = !db.configured);
  if (new URLSearchParams(location.search).get('demo') === '1') openDashboard(null,true);
  else if (db.configured) {
    (async () => {
      try {
        const {data} = await db.getClient().auth.getSession();
        if (data?.session) await openDashboard(await verifyAdmin());
      } catch (error) { showError('#login-error',errorText(error)); }
      db.getClient().auth.onAuthStateChange(event => {
        if (event === 'SIGNED_OUT' && !demo) setTimeout(authView,0);
      });
    })();
  }
})();
