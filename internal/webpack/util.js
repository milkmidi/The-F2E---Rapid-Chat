
const DEV_MODE = process.env.NODE_ENV === 'development';

/**
 * add hash code to file name
 * @param {string} pathName
 * @param {string} ext
 * @param {boolean} isHashFileName
 */
const toFilename = (pathName, ext = 'js', isHashFileName = true) => {
  const units = [pathName, '.', ext];
  if (!DEV_MODE) {
    const hashType = ext === 'js' ? '[chunkhash]' : '[contenthash]';
    if (isHashFileName) {
      units.splice(1, 0, `-${hashType}`);
    } else {
      units.push(`?${hashType}`);
    }
  }
  return units.join('');
};

const createPugHtmlLoaderOptions = (stringify = false) => {
  const options = {
    data: {
      DEV_MODE,
      APP_ENV: process.env.APP_ENV,
    },
    pretty: DEV_MODE,
  };
  return stringify ? JSON.stringify(options) : options;
};

module.exports = {
  toFilename,
  createPugHtmlLoaderOptions,
};
