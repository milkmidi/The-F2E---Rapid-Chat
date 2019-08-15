const componentGenerator = require('./components');
const containerGenerator = require('./containers');
const page = require('./pages');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('page', page);
};
