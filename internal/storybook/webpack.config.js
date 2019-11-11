const remove = require('lodash/remove');
const rootWebpackConfig = require('../webpack/webpack.client');

module.exports = ({ config, mode }) => {
  console.log(`storybook mode:${mode}`);
  Object.assign(config.resolve.alias, rootWebpackConfig.resolve.alias);

  config.resolve.modules = [
    ...config.resolve.modules,
    ...rootWebpackConfig.resolve.modules,
  ];
  const { rules } = config.module;
  remove(rules, (rule) => rule.test.test('.vue'));
  config.module.rules = [
    ...rules,
    ...rootWebpackConfig.module.rules,
    {
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    },
  ];
  config.module.rules.push({
    resourceQuery: /blockType=docs/,
    use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
  });

  return config;
};
