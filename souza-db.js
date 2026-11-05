/* Conexão compartilhada pelo catálogo e pelo painel. Nenhuma senha fica neste arquivo. */
(function () {
  'use strict';
  const config = window.SOUZA_CONFIG || {};
  const url = String(config.supabaseUrl || '').replace(/\/$/, '');
  const key = String(config.supabasePublishableKey || '');
  let client;
  const configured = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url) && key.startsWith('sb_publishable_');
  const categories = [
    ['combos', 'Combos'], ['beer', 'Cervejas'], ['spirits', 'Destilados'],
    ['gin', 'Gin'], ['liqueurs', 'Ballena e licores'], ['energy', 'Energéticos'],
    ['wine', 'Vinhos'], ['cocktail', 'Coquetéis'], ['drinks', 'Copão'],
    ['soft', 'Refrigerantes'], ['other', 'Churrasco'],
    ['food-grocery', 'Mercearia'], ['food-snacks', 'Salgadinhos'], ['food-sweets', 'Doces e chocolates'], ['food-bakery', 'Padaria'], ['food-frozen', 'Congelados'], ['food-dairy', 'Frios e laticínios'], ['food-other', 'Outros alimentos']
  ];
  function getClient() {
    if (!configured) throw new Error('A conexão ainda não foi configurada. Siga o guia COMECE-AQUI.html.');
    if (!window.supabase?.createClient) throw new Error('Não foi possível carregar a conexão. Atualize a página.');
    if (!client) client = window.supabase.createClient(url, key, {
      auth: { persistSession: true, storage: window.sessionStorage, autoRefreshToken: true, detectSessionInUrl: false }
    });
    return client;
  }
  function safeImage(value, productId) {
    const embedded = window.SOUZA_IMAGENS?.[productId];
    if (embedded && /^assets\/products\//.test(String(value || ''))) return embedded;
    if (embedded && !value) return embedded;
    const text = String(value || '');
    if (/^assets\/products\/[a-zA-Z0-9_.-]+\.(png|jpe?g|webp)$/.test(text)) return embedded || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22 viewBox=%220 0 300 400%22%3E%3Crect width=%22300%22 height=%22400%22 fill=%22%23eaf0f5%22/%3E%3Ctext x=%22150%22 y=%22200%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%23092b55%22%3EMercado Souza%3C/text%3E%3C/svg%3E';
    try { const parsed = new URL(text); if (parsed.protocol === 'https:' && !parsed.username && !parsed.password) return parsed.href; } catch {}
    return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22 viewBox=%220 0 300 400%22%3E%3Crect width=%22300%22 height=%22400%22 fill=%22%23eaf0f5%22/%3E%3Ctext x=%22150%22 y=%22200%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%23092b55%22%3EMercado Souza%3C/text%3E%3C/svg%3E';
  }
  function validateProduct(input) {
    const allowed = new Set(categories.map(([id]) => id));
    const name = String(input.name || '').trim();
    const detail = String(input.detail || '').trim();
    const unit = String(input.unit || '').trim();
    const image = String(input.image_url || '').trim();
    if (name.length < 2 || name.length > 140) throw new Error('O nome precisa ter de 2 a 140 caracteres.');
    if (detail.length > 400) throw new Error('A descrição pode ter até 400 caracteres.');
    if (!allowed.has(input.category)) throw new Error('Escolha uma categoria válida.');
    if (!Number.isInteger(input.price) || input.price < 1 || input.price > 10000000) throw new Error('Informe um preço entre R$ 0,01 e R$ 100.000,00.');
    if (!unit || unit.length > 60) throw new Error('Informe a unidade de venda, com até 60 caracteres.');
    // Fotos antigas continuam identificadas pelo caminho salvo no Supabase.
    // A imagem incorporada no codigo e exibida pelo ID do produto, sem exigir upload.
    const isOriginalImage = /^assets\/products\/[a-zA-Z0-9_.-]+\.(png|jpe?g|webp)$/.test(image);
    let isHttpsImage = false;
    try { const parsed = new URL(image); isHttpsImage = parsed.protocol === 'https:' && !parsed.username && !parsed.password; } catch {}
    if (image && !isOriginalImage && !isHttpsImage) throw new Error('Use uma foto enviada pelo painel ou um endereço HTTPS válido.');
    return { name, detail, category: input.category, price: input.price, unit, image_url: image,
      active: !!input.active, available: !!input.available, featured: !!input.featured,
      position: Math.max(0, Math.min(100000, Math.trunc(Number(input.position) || 0))) };
  }
  function parsePrice(value) {
    let text = String(value).trim().replace(/^R\$\s*/, '').replace(/\s/g, '');
    if (text.includes(',')) text = text.replace(/\./g, '').replace(',', '.');
    if (!/^\d+(?:\.\d{1,2})?$/.test(text)) throw new Error('Digite o preço como 19,90.');
    const [whole, fraction = ''] = text.split('.');
    return Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
  }
  async function listProducts(admin = false, signal) {
    const db = getClient();
    const rows = [];
    for (let offset = 0; ; offset += 500) {
      let query = db.from('souza_products').select('*').order('position').order('id').range(offset, offset + 499);
      if (!admin) query = query.eq('active', true);
      if (signal) query = query.abortSignal(signal);
      const { data, error } = await query;
      if (error) throw error;
      rows.push(...data);
      if (data.length < 500) return rows;
    }
  }
  window.SouzaDB = Object.freeze({ configured, categories, getClient, safeImage, validateProduct, parsePrice, listProducts });
})();
