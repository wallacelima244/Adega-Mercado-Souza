window.SOUZA_LOGO="./logo.png";
window.SOUZA_IMAGENS={
  "of-combo-jack": "./assets/produtos/of-combo-jack.webp",
  "of-corona-6": "./assets/produtos/of-corona-6.webp",
  "of-heineken-350-12": "./assets/produtos/of-heineken-350-12.webp",
  "of-heineken-269-8": "./assets/produtos/of-heineken-269-8.webp",
  "of-brahma-269-15": "./assets/produtos/of-brahma-269-15.webp",
  "of-skol-269-15": "./assets/produtos/of-skol-269-15.webp",
  "of-itaipava-350-12": "./assets/produtos/of-itaipava-350-12.webp",
  "of-itaipava-269-12": "./assets/produtos/of-itaipava-269-12.webp",
  "of-jack-old7": "./assets/produtos/of-jack-old7.webp",
  "of-jack-apple": "./assets/produtos/of-jack-old7.webp",
  "of-jack-blackberry": "./assets/produtos/of-jack-old7.webp",
  "of-ballena-original": "./assets/produtos/of-ballena-original.webp",
  "of-ballena-coco": "./assets/produtos/of-ballena-original.webp",
  "of-ballena-chocolate": "./assets/produtos/of-ballena-original.webp",
  "of-invictus-tropical": "./assets/produtos/of-invictus-tropical.webp",
  "of-invictus-morango": "./assets/produtos/of-invictus-tropical.webp",
  "of-invictus-melancia": "./assets/produtos/of-invictus-tropical.webp",
  "of-vibe-tropical": "./assets/produtos/of-vibe-tropical.webp",
  "of-vibe-melancia": "./assets/produtos/of-vibe-tropical.webp",
  "of-vibe-limao": "./assets/produtos/of-vibe-tropical.webp",
  "of-vibe-laranja": "./assets/produtos/of-vibe-tropical.webp",
  "of-vibe-pessego": "./assets/produtos/of-vibe-tropical.webp",
  "of-vibe-acai": "./assets/produtos/of-vibe-tropical.webp",
  "of-coca-25": "./assets/produtos/of-coca-25.webp",
  "of-coca-retornavel": "./assets/produtos/of-coca-retornavel.webp",
  "of-coca-25-6": "./assets/produtos/of-coca-25-6.webp",
  "of-tubaina-2-6": "./assets/produtos/of-tubaina-2-6.webp",
  "of-absolut-1": "./assets/produtos/of-absolut-1.webp",
  "of-ciroc-red": "./assets/produtos/of-ciroc-red.webp",
  "of-ciroc-original": "./assets/produtos/of-ciroc-original.webp",
  "of-dreher": "./assets/produtos/of-dreher.webp",
  "of-sangue-boi": "./assets/produtos/of-sangue-boi.webp",
  "of-cantina": "./assets/produtos/of-cantina.webp",
  "of-pergola": "./assets/produtos/of-pergola.webp",
  "of-sangue-vale": "./assets/produtos/of-sangue-vale.webp",
  "of-bob": "./assets/produtos/of-bob.webp",
  "of-chanceler": "./assets/produtos/of-chanceler.webp",
  "of-busca": "./assets/produtos/of-busca.webp",
  "of-corote-whisky": "./assets/produtos/of-corote-whisky.webp",
  "of-corote-gin": "./assets/produtos/of-corote-whisky.webp",
  "of-canelinha": "./assets/produtos/of-canelinha.webp",
  "of-copao": "./assets/produtos/of-copao.webp",
  "of-carvao": "./assets/produtos/of-carvao.webp"
};
'use strict';
const WHATSAPP='5511966036004';
const STORE_ADDRESS="Rua Souza, 21 - Santana de Parnaíba - SP";
const INSTAGRAM="https://www.instagram.com/mercado___souza/";
const MAP_URL="https://www.google.com/maps/search/?api=1&query=Rua%20Souza%2C%2021%20-%20Santana%20de%20Parna%C3%ADba%20-%20SP";
const DIRECTIONS_URL="https://www.google.com/maps/dir/?api=1&destination=Rua%20Souza%2C%2021%20-%20Santana%20de%20Parna%C3%ADba%20-%20SP";
const KEY='souza-delivery-animado-v1';
const CATEGORIES=[['all','Todos'],['combos','Combos'],['beer','Cervejas'],['spirits','Destilados'],['gin','Gin'],['liqueurs','Ballena'],['energy','Energéticos'],['wine','Vinhos'],['cocktail','Coquetéis'],['drinks','Copão'],['soft','Refrigerantes'],['other','Churrasco']];
// Preços em centavos: 19000 equivale a R$ 190,00.
const ROWS=[
  ["of-combo-jack","Combo Jack Daniel’s Blackberry + Red Bull","1 Jack Daniel’s + 5 Red Bulls + 5 gelos","combos",19000,"o combo"],
  ["of-corona-6","Corona Extra · pacote com 6","6 long necks de 330 ml","beer",4300,"o pacote"],
  ["of-heineken-350-12","Heineken · pacote com 12","12 latas de 350 ml","beer",5900,"o pacote"],
  ["of-heineken-269-8","Heineken · pacote com 8","8 latas de 269 ml","beer",3500,"o pacote"],
  ["of-brahma-269-15","Brahma Duplo Malte · pacote com 15","15 latas de 269 ml","beer",3850,"o pacote"],
  ["of-skol-269-15","Skol · pacote com 15","15 latas de 269 ml","beer",4300,"o pacote"],
  ["of-itaipava-350-12","Itaipava · pacote com 12","12 latas de 350 ml","beer",3300,"o pacote"],
  ["of-itaipava-269-12","Itaipava · pacote com 12","12 latas de 269 ml","beer",3050,"o pacote"],
  ["of-jack-old7","Jack Daniel’s Old Nº 7","Garrafa de 1 litro","spirits",12500,"unidade"],
  ["of-jack-apple","Jack Daniel’s Tennessee Apple","Garrafa de 1 litro","spirits",12500,"unidade"],
  ["of-jack-blackberry","Jack Daniel’s Tennessee Blackberry","Garrafa de 1 litro","spirits",12500,"unidade"],
  ["of-ballena-original","Ballena Original","Garrafa · consulte o volume no atendimento","liqueurs",11000,"unidade"],
  ["of-ballena-coco","Ballena Coco","Garrafa · consulte o volume no atendimento","liqueurs",11000,"unidade"],
  ["of-ballena-chocolate","Ballena Chocolate e Caramelo","Garrafa · consulte o volume no atendimento","liqueurs",11000,"unidade"],
  ["of-invictus-tropical","Invictus Tropical","Coquetel elaborado com dry gin · 900 ml","gin",1850,"unidade"],
  ["of-invictus-morango","Invictus Morango com Pêssego","Coquetel elaborado com dry gin · 900 ml","gin",1850,"unidade"],
  ["of-invictus-melancia","Invictus Melancia","Coquetel elaborado com dry gin · 900 ml","gin",1850,"unidade"],
  ["of-vibe-tropical","V!be Tropical","Energético · garrafa · volume a confirmar","energy",1099,"unidade"],
  ["of-vibe-melancia","V!be Melancia","Energético · garrafa · volume a confirmar","energy",1099,"unidade"],
  ["of-vibe-limao","V!be Limão","Energético · garrafa · volume a confirmar","energy",1099,"unidade"],
  ["of-vibe-laranja","V!be Laranja","Energético · garrafa · volume a confirmar","energy",1099,"unidade"],
  ["of-vibe-pessego","V!be Pêssego e Morango","Energético · garrafa · volume a confirmar","energy",1099,"unidade"],
  ["of-vibe-acai","V!be Açaí com Coco","Energético · garrafa · volume a confirmar","energy",1099,"unidade"],
  ["of-coca-25","Coca-Cola 2,5 L","Não retornável · garrafa de 2,5 litros","soft",1550,"unidade"],
  ["of-coca-retornavel","Coca-Cola retornável","Garrafa retornável · consulte volume e troca de vasilhame","soft",975,"unidade"],
  ["of-coca-25-6","Coca-Cola 2,5 L · pacote com 6","6 garrafas de 2,5 litros","soft",6250,"o pacote"],
  ["of-tubaina-2-6","Tubaína 2 L · pacote com 6","6 garrafas de 2 litros","soft",3750,"o pacote"],
  ["of-absolut-1","Absolut Original","Vodka · garrafa de 1 litro","spirits",7499,"unidade"],
  ["of-ciroc-red","Cîroc Red Berry","Vodka · garrafa · volume a confirmar","spirits",17500,"unidade"],
  ["of-ciroc-original","Cîroc Original","Vodka · garrafa · volume a confirmar","spirits",15500,"unidade"],
  ["of-dreher","Dreher","Tradição Centenária · 900 ml","spirits",1899,"unidade"],
  ["of-sangue-boi","Sangue de Boi","Vinho tinto suave · 750 ml","wine",1625,"unidade"],
  ["of-cantina","Cantina Agrícola","Vinho Bordô suave · 750 ml","wine",1450,"unidade"],
  ["of-pergola","Pérgola Seleção Suave","Vinho tinto de mesa · 1 litro","wine",2399,"unidade"],
  ["of-sangue-vale","Sangue do Vale","Coquetel alcoólico · 880 ml","cocktail",699,"unidade"],
  ["of-bob","Bob Pinga","Bebida alcoólica mista · 975 ml","cocktail",2750,"unidade"],
  ["of-chanceler","Chanceler Golden Label","Aperitivo com whisky e carvalho · 1 litro","cocktail",1850,"unidade"],
  ["of-busca","Busca Brisa","Bebida alcoólica mista · 1 litro","cocktail",2850,"unidade"],
  ["of-corote-whisky","Corote Combo Whisky","Coquetel alcoólico gaseificado · 1 litro","cocktail",1299,"unidade"],
  ["of-corote-gin","Corote Combo Gin Tropical","Coquetel alcoólico gaseificado · 1 litro","cocktail",1299,"unidade"],
  ["of-canelinha","Canelinha Da Rocha","Coquetel alcoólico de canela e gengibre · 900 ml","cocktail",1650,"unidade"],
  ["of-copao","Copão de Jack Daniel’s","Com gelo de coco e Red Bull · volume a confirmar","drinks",4300,"o copão"],
  ["of-carvao","Carvão Funchal","Pacote de 2 kg","other",1450,"o pacote"]
];
const PRODUCTS=ROWS.map(([id,name,detail,category,price,unit])=>({id,name,detail,category,price,unit}));
const byId=new Map(PRODUCTS.map(p=>[p.id,p]));
const labels=new Map(CATEGORIES);
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const money=n=>(n/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const icon=id=>`<svg aria-hidden="true"><use href="#${id}-icon"/></svg>`;
const wa=text=>`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const fallback='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="300" height="450" fill="#edf1f5"/><text x="150" y="225" text-anchor="middle" font-family="Arial" font-size="16" fill="#60758b">Imagem indisponível</text></svg>');
const photo=id=>window.SOUZA_IMAGENS?.[id]||fallback;
const motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
let category='all',cart={},toastTimer;
const selected=new Map();
try{const data=JSON.parse(localStorage.getItem(KEY)||'{}');if(data&&typeof data==='object'&&!Array.isArray(data))for(const [id,q] of Object.entries(data)){if(byId.has(id)&&Number.isInteger(q)&&q>0&&q<=99)cart[id]=q;}}catch{}
const entries=()=>Object.entries(cart);
const total=()=>entries().reduce((n,[id,q])=>n+byId.get(id).price*q,0);
const count=()=>entries().reduce((n,[,q])=>n+q,0);
function save(){try{localStorage.setItem(KEY,JSON.stringify(cart));}catch{}}
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2400);}
function categories(){ $('#categories').innerHTML=CATEGORIES.map(([id,label])=>`<button class="category ${category===id?'active':''}" data-category="${id}" aria-pressed="${category===id}"><span class="category-icon">${`<svg aria-hidden="true"><use href="#cat-${id}"/></svg>`}</span>${esc(label)}</button>`).join(''); }
const family=id=>({'of-jack-apple':'of-jack-old7','of-jack-blackberry':'of-jack-old7','of-ballena-coco':'of-ballena-original','of-ballena-chocolate':'of-ballena-original','of-invictus-morango':'of-invictus-tropical','of-invictus-melancia':'of-invictus-tropical','of-vibe-melancia':'of-vibe-tropical','of-vibe-limao':'of-vibe-tropical','of-vibe-laranja':'of-vibe-tropical','of-vibe-pessego':'of-vibe-tropical','of-vibe-acai':'of-vibe-tropical','of-corote-gin':'of-corote-whisky'}[id]||id);
function card(p,variants=[],index=0){return `<article class="card reveal" style="--delay:${(index%4)*.045}s"><div class="card-image"><img src="${photo(p.id)}" alt="${esc(p.name)}" width="300" height="450" loading="lazy" decoding="async"></div><div class="card-body"><span class="card-category">${esc(labels.get(p.category))}</span><h3>${esc(p.name)}</h3><p class="card-description">${esc(p.detail)}</p>${variants.length>1?`<label class="variant">Escolha o sabor<select data-variant="${family(p.id)}" aria-label="Sabor de ${esc(p.name)}">${variants.map(v=>`<option value="${v.id}" ${v.id===p.id?'selected':''}>${esc(v.name)}</option>`).join('')}</select></label>`:''}<div class="price-line"><strong class="card-price">${money(p.price)}</strong><span>${esc(p.unit)}</span></div><button class="button yellow" data-add="${p.id}" aria-label="Adicionar ${esc(p.name)}">${icon('plus')}Adicionar</button><a class="question" href="${wa(`Olá, Mercado Souza! Tenho uma dúvida sobre ${p.name} (${p.detail}), anunciado por ${money(p.price)} ${p.unit}.`)}" target="_blank" rel="noopener noreferrer">Tirar dúvida sobre o produto ↗</a></div></article>`;}
const observer=motion&&'IntersectionObserver' in window?new IntersectionObserver(items=>{items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');observer.unobserve(item.target);}});},{threshold:.06}):null;
function reveal(){if(!observer){$$('.reveal').forEach(el=>el.classList.add('visible'));return;}$$('.reveal:not(.visible)').forEach(el=>observer.observe(el));}
function renderProducts(){const query=norm($('#search').value.trim());const list=PRODUCTS.filter(p=>(category==='all'||p.category===category)&&norm(`${p.name} ${p.detail} ${labels.get(p.category)}`).includes(query));const groups=new Map();for(const p of list){const key=family(p.id);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(p);}const cards=[...groups.entries()].map(([key,variants])=>({p:variants.find(p=>p.id===selected.get(key))||variants[0],variants}));switch($('#sort').value){case'low':cards.sort((a,b)=>a.p.price-b.p.price);break;case'high':cards.sort((a,b)=>b.p.price-a.p.price);break;case'name':cards.sort((a,b)=>a.p.name.localeCompare(b.p.name,'pt-BR'));}$('#products').innerHTML=cards.map(({p,variants},i)=>card(p,variants,i)).join('');$('#result-count').textContent=`${cards.length} produtos · ${list.length} opções de compra`;$('#no-results').hidden=list.length>0;reveal();}
function invalidateMessage(){$('#ready-link').hidden=true;$('#ready-link').removeAttribute('href');}
function renderCart(){const items=entries();$$('[data-count]').forEach(el=>el.textContent=count());$('#mobile-total').textContent=money(total());$('#mobile-cart').hidden=!count();$('#empty-cart').hidden=!!items.length;$('#summary').hidden=!items.length;$('#cart-items').innerHTML=items.map(([id,q])=>{const p=byId.get(id);return `<article class="cart-item"><img src="${photo(id)}" alt="${esc(p.name)}"><div><h3>${esc(p.name)}</h3><p>${esc(p.detail)}</p><div class="cart-row"><div class="stepper"><button data-change="${id}" data-delta="-1" aria-label="Diminuir ${esc(p.name)}">−</button><span>${q}</span><button data-change="${id}" data-delta="1" aria-label="Aumentar ${esc(p.name)}" ${q>=99?'disabled':''}>+</button></div><strong>${money(p.price*q)}</strong></div></div><button class="remove" data-remove="${id}" aria-label="Remover ${esc(p.name)}">×</button></article>`;}).join('');$('#cart-total').textContent=money(total());$('#review-total').textContent=money(total());$('#review-items').innerHTML=items.map(([id,q])=>`<div class="review-line"><span>${q} × ${esc(byId.get(id).name)}</span><strong>${money(byId.get(id).price*q)}</strong></div>`).join('');}
function fly(button,id){if(!motion||typeof button.animate!=='function')return;const img=button.closest('.card')?.querySelector('img');if(!img)return;const start=img.getBoundingClientRect(),end=$('.header-cart').getBoundingClientRect();if(start.bottom<0||start.top>innerHeight)return;const clone=new Image();clone.src=photo(id);clone.alt='';clone.setAttribute('aria-hidden','true');clone.className='fly-image';clone.style.left=`${start.left+start.width/2-32}px`;clone.style.top=`${start.top+start.height/2-45}px`;document.body.append(clone);const dx=end.left+end.width/2-start.left-start.width/2,dy=end.top+end.height/2-start.top-start.height/2;const animation=clone.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${dx*.5}px,${dy*.5-55}px) scale(.75)`,opacity:.85},{transform:`translate(${dx}px,${dy}px) scale(.15)`,opacity:0}],{duration:650,easing:'cubic-bezier(.3,.05,.5,1)'});animation.onfinish=()=>clone.remove();animation.oncancel=()=>clone.remove();setTimeout(()=>clone.remove(),900);$('.header-cart').animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:330,delay:450});}
function change(id,delta,button){if(!byId.has(id))return;const next=(cart[id]||0)+delta;if(next>99)return toast('Limite de 99 unidades por produto.');if(next<=0)delete cart[id];else cart[id]=next;save();renderCart();invalidateMessage();if(delta>0){if(button)fly(button,id);toast(`${byId.get(id).name} adicionado ao pedido`);}}
function cartView(){$('#cart-view').hidden=false;$('#order-form').hidden=true;$('#cart-title').textContent='Meu carrinho';$('#cart-dialog').scrollTop=0;}
function openCart(){cartView();renderCart();if(!$('#cart-dialog').open)$('#cart-dialog').showModal();}
function receiving(){const delivery=$('[name="mode"]:checked').value==='delivery';const later=$('#address-later').checked;$('#delivery-section').hidden=!delivery;$('#pickup-section').hidden=delivery;$('#address-fields').hidden=!delivery||later;$$('[data-address]').forEach(el=>{el.required=delivery&&!later;el.disabled=!delivery||later;});}
document.addEventListener('click',event=>{const add=event.target.closest('[data-add]');if(add){change(add.dataset.add,1,add);return;}const step=event.target.closest('[data-change]');if(step){const id=step.dataset.change,delta=step.dataset.delta;change(id,Number(delta));$$('[data-change]').find(el=>el.dataset.change===id&&el.dataset.delta===delta)?.focus({preventScroll:true});return;}const remove=event.target.closest('[data-remove]');if(remove){delete cart[remove.dataset.remove];save();renderCart();invalidateMessage();($('#cart-items button')||$('#browse')).focus({preventScroll:true});return;}if(event.target.closest('[data-open-cart]'))return openCart();const filter=event.target.closest('[data-category],[data-category-shortcut]');if(filter){category=filter.dataset.category||filter.dataset.categoryShortcut;$('#search').value='';categories();renderProducts();if(filter.hasAttribute('data-category-shortcut'))$('#catalogo').scrollIntoView({behavior:motion?'smooth':'auto'});else $$('[data-category]').find(el=>el.dataset.category===category)?.focus({preventScroll:true});}});
document.addEventListener('change',event=>{const select=event.target.closest('[data-variant]');if(select){const key=select.dataset.variant;selected.set(key,select.value);renderProducts();$$('[data-variant]').find(el=>el.dataset.variant===key)?.focus({preventScroll:true});}});
let searchTimer;$('#search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(renderProducts,140);});$('#sort').addEventListener('change',renderProducts);$('#reset').onclick=()=>{category='all';$('#search').value='';$('#sort').value='featured';categories();renderProducts();};$('#close-cart').onclick=()=>$('#cart-dialog').close();$('#browse').onclick=()=>$('#cart-dialog').close();$('#clear').onclick=()=>{cart={};save();renderCart();invalidateMessage();$('#browse').focus();};$('#back-cart').onclick=cartView;$('#checkout').onclick=()=>{if(!count())return toast('Seu carrinho está vazio.');$('#cart-view').hidden=true;$('#order-form').hidden=false;$('#cart-title').textContent='Finalizar pedido';receiving();$('#cart-dialog').scrollTop=0;$('[name="name"]').focus({preventScroll:true});};$$('[name="mode"]').forEach(input=>input.addEventListener('change',receiving));$('#address-later').addEventListener('change',receiving);$('#payment').onchange=()=>{$('#change-field').hidden=$('#payment').value!=='Dinheiro';};$('#order-form').addEventListener('input',invalidateMessage);
$('#order-form').addEventListener('submit',event=>{event.preventDefault();if(!count())return toast('Adicione produtos ao pedido.');const form=event.currentTarget;if(!form.reportValidity())return;const data=new FormData(form),read=key=>String(data.get(key)||'').trim();for(const key of ['name',...(read('mode')==='delivery'&&!data.get('addressLater')?['address','district','city']:[])]){if(!read(key)){const field=form.elements[key];field.setCustomValidity('Preencha este campo.');field.reportValidity();field.addEventListener('input',()=>field.setCustomValidity(''),{once:true});return;}}const lines=['Olá, Mercado Souza! Quero fazer este pedido:','','*PRODUTOS*'];for(const [id,q] of entries()){const p=byId.get(id);lines.push(`${q} × ${p.name}`,`${p.detail} · ${money(p.price)} ${p.unit}`,`Total: ${money(p.price*q)}`,'');}lines.push(`*Subtotal dos produtos: ${money(total())}*`,'Frete e disponibilidade: a confirmar.','',`Nome: ${read('name')}`);if(read('phone'))lines.push(`WhatsApp: ${read('phone')}`);if(read('mode')==='pickup')lines.push('Recebimento: retirada na loja.',`Endereço de retirada: ${STORE_ADDRESS}`,`Como chegar: ${DIRECTIONS_URL}`,'Por favor, confirme o horário de retirada.');else{lines.push('Recebimento: entrega.');if(data.get('addressLater'))lines.push('Vou informar meu endereço nesta conversa.');else{lines.push(`Endereço: ${read('address')}`,`Bairro: ${read('district')}`,`Cidade: ${read('city')}`);if(read('reference'))lines.push(`Referência: ${read('reference')}`);}}lines.push('',`Pagamento desejado: ${read('payment')}`);if(read('payment')==='Dinheiro'&&read('change'))lines.push(`Troco para: ${read('change')}`);if(read('notes'))lines.push(`Observações: ${read('notes')}`);lines.push('','Declaro ter 18 anos ou mais.','Aguardo a confirmação da loja para concluir o pedido.');const url=wa(lines.join('\n'));$('#ready-link').href=url;$('#ready-link').hidden=false;window.open(url,'_blank','noopener,noreferrer');});
$('#cart-dialog').addEventListener('click',event=>{if(event.target!==event.currentTarget)return;const r=event.currentTarget.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.currentTarget.close();});
function storeState(now=new Date()){
 const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now).map(p=>[p.type,p.value]));
 const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(parts.weekday);
 const minutes=Number(parts.hour)*60+Number(parts.minute),opening=day===0?420:480,closing=day===0?840:1200;
 const isOpen=minutes>=opening&&minutes<closing;
 const message=isOpen?`Hoje atendemos até ${day===0?'14h':'20h'}.`:minutes<opening?`Abrimos hoje às ${day===0?'07h':'08h'}.`:`Abrimos amanhã às ${day===6?'07h':'08h'}.`;
 return {isOpen,message};
}
function hours(){const state=storeState();$$('[data-store-status]').forEach(el=>{el.textContent=state.isOpen?'Aberto agora':'Fechado agora';el.classList.toggle('is-open',state.isOpen);el.classList.toggle('is-closed',!state.isOpen);});$('#hours-message').textContent=state.message+' Horário de São Paulo.';}
$$('[data-contact]').forEach(link=>link.href=wa('Olá, Mercado Souza! Gostaria de atendimento.'));
$$('[data-instagram]').forEach(link=>link.href=INSTAGRAM);
$$('[data-map]').forEach(link=>link.href=MAP_URL);
$$('[data-directions]').forEach(link=>link.href=DIRECTIONS_URL);$$('[data-logo]').forEach(img=>{if(window.SOUZA_LOGO)img.src=window.SOUZA_LOGO;});$$('[data-product-image]').forEach(img=>img.src=photo(img.dataset.productImage));categories();renderProducts();renderCart();receiving();$('#featured').innerHTML=['of-combo-jack','of-copao','of-carvao'].map((id,i)=>card(byId.get(id),[],i)).join('');hours();setInterval(hours,30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)hours();});
let entered=false;function enter(){if(entered)return;entered=true;document.documentElement.classList.remove('loading');if(motion)document.body.classList.add('motion-ready');reveal();if(!window.SOUZA_IMAGENS)toast('Não foi possível carregar as fotos. Reabra o arquivo completo.');}
$('.loader button').addEventListener('click',enter);
Promise.race([Promise.allSettled($$('.hero-image').map(img=>typeof img.decode==='function'?img.decode():Promise.resolve())),new Promise(resolve=>setTimeout(resolve,1800))]).then(enter);
