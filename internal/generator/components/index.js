const path = require('path');
const { componentExists } = require('../utils');

const componentPath = path.resolve('src/components');
module.exports = {
  description: 'add Component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called',
      default: 'Button',
      validate(value) {
        if (!/^[A-Za-z][A-Za-z0-9]+$/.test(value)) return 'Invalidte component name!';
        return componentExists(value) ? 'Component name already exists!' : true;
      },
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: `${componentPath}/{{properCase name}}/index.js`,
      templateFile: 'components/index.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${componentPath}/{{properCase name}}/{{properCase name}}.vue`,
      templateFile: 'components/vue.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${componentPath}/{{properCase name}}/{{properCase name}}.stories.js`,
      templateFile: 'components/stories.hbs',
      abortOnFail: true,
    },
  ],
};
