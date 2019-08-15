const fs = require('fs');
const path = require('path');

const componentNames = fs.readdirSync(path.resolve('src/components'));
const containerNames = fs.readdirSync(path.resolve('src/containers'));
const pageNames = fs.readdirSync(path.resolve('src/pages'));

const componentExists = comp => componentNames.indexOf(comp) > 0;
const containerExists = comp => containerNames.indexOf(comp) > 0;
const pageExists = comp => pageNames.indexOf(comp) > 0;

module.exports = {
  componentExists,
  containerExists,
  pageExists,
};
