module.exports = (app) => {
  const ROOT_PATH = process.cwd();
  app.get('/healthy', (req, res) => {
    res.send('It is healthy!');
  });
  if (process.env.NODE_ENV === 'development') {
    require('../middleware/webpackMiddleware')(app);
  } else {
    app.get('*', (req, res) => {
      res.sendFile(`${ROOT_PATH}/dist/index.html`);
    });
  }
};
