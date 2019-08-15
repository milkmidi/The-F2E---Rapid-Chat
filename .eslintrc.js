module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb-base',
  globals: {
    FB: false,
    ga: false,
    device: false,
    pug: false,
    gtag: false,
    dataLayer: false,
    TweenMax: false,
    TimelineMax: false,
    Power2: false,
  },
  plugins: [
    'html',
    'vue-libs',
    'flowtype',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'internal/webpack/webpack.base.js',
      },
    },
  },
  rules: {
    'class-methods-use-this': 0,
    'max-len': ['error', { code: 150 }],
    'vue-libs/jsx-uses-vars': 2,
    'prefer-promise-reject-errors': 0,
    'object-curly-newline': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
  },
};
