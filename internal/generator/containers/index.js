const path = require('path');
const { containerExists } = require('../utils');

const containerPath = path.resolve('src/containers');
module.exports = {
  description: 'add Container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called',
      default: 'Button',
      validate(value) {
        if (!/^[A-Za-z][A-Za-z0-9]+$/.test(value)) return 'Invalidte component name!';
        return containerExists(value) ? 'Container name already exists!' : true;
      },
    },
  ],
  actions: () => [
    {
      type: 'add',
      path: `${containerPath}/{{properCase name}}/{{properCase name}}.vue`,
      templateFile: 'containers/vue.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: `${containerPath}/{{properCase name}}/index.js`,
      templateFile: 'components/index.hbs',
      abortOnFail: true,
    },
  ],
};
