
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24800, hash: 'd34c6275147e957b9615f5e03e911210c8a248e8b9eef0d59c6e7510787c4670', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17069, hash: 'cadb13fadebcd54058bd4a35df7516a7be16a005b88b5bbfb3e350c48824723d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26433, hash: '967108209c12435d2bf0797f691666d90a9d7f62a1d79f5af5f1007592ff21fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BFX46JNJ.css': {size: 33783, hash: 'GCj/2ZtRsx8', text: () => import('./assets-chunks/styles-BFX46JNJ_css.mjs').then(m => m.default)}
  },
};
