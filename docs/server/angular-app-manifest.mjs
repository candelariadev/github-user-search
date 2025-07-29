
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/github-user-search/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/github-user-search"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3976, hash: '05c33f19e3504fbfd6f40f62a28e77aa96b1ffe64d005e7eb31acbac4592a93c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4489, hash: '24839a833d05e8d7b28b8f44e4819fe6c4c27a6ae61c14f26d1b7c0b3e74e8ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7533, hash: 'bcaa8d37e762b34528091ee938f7c064fc28977bd57e2be414eef383792620ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
