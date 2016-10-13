/**
 * Main JS entry point for us-election-mini-dashboard
 */
require('./main.scss');

// const demoWidths = [550, 450, 300];
//
// const mainTemplate = Handlebars.compile(
//   document.querySelector('#uemd-main-template').innerHTML
// );
//
const panelTemplates = {};
// for (const type of ['president', 'senate', 'house']) {
//   panelTemplates[type] = Handlebars.compile(
//     document.querySelector(`#uemd-template-${type}`).innerHTML
//   );
// }

fetch('data.json').then(res => res.json()).then(ctx => {
  // Webpack require the template
  const tpl = require('./mini-dashboard.njk');

  // Append to body
  document.body.innerHTML = tpl.render(ctx);
});
