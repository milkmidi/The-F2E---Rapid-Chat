module.exports = {
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
    'vue',
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    // support the same @ -> src alias mapping in source code
    '@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!MODULE_NAME_HERE).+\\.js$',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};
