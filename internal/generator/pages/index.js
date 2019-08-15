const path = require('path');
const { pageExists } = require('../utils');

const pagePath = path.resolve('src/pages');
module.exports = {
  description: 'add Page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called',
      default: 'MainPage',
      validate(value) {
        if (!/^[A-Za-z][A-Za-z0-9]+$/.test(value)) return 'Invalidte page name!';
        return pageExists(value) ? 'Page name already exists!' : true;
      },
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: `${pagePath}/{{properCase name}}/{{properCase name}}.vue`,
      templateFile: 'containers/vue.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${pagePath}/{{properCase name}}/index.js`,
      templateFile: 'components/index.hbs',
      abortOnFail: true,
    },
  ],
};
