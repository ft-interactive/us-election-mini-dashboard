(() => {
  'use strict';

  const demoWidths = [550, 450, 300];

  const mainTemplate = Handlebars.compile(
    document.querySelector('#uemd-main-template').innerHTML
  );

  const panelTemplates = {};
  for (const type of ['president', 'senate', 'house']) {
    panelTemplates[type] = Handlebars.compile(
      document.querySelector(`#uemd-template-${type}`).innerHTML
    );
  }

  fetch('data.json').then(res => res.json()).then(({ componentState: state }) => {
    const main = document.querySelector('main');

    // prepare the template context
    const context = {
      panels: state.enabledPanels.map(type => ({
        type,
        heading: `${type[0].toUpperCase()}${type.slice(1)}`,
        content: panelTemplates[type](state.panelContents[type]),
      })),
    };

    // render demos
    for (const width of demoWidths) {
      const html = mainTemplate(context);

      const wrapper = document.createElement('div');
      wrapper.style.width = `${width}px`;
      wrapper.innerHTML = `<h3>${width}px</h3><div class="demo-container">${html}</div>`;

      main.appendChild(wrapper);
    }
  });
})();
