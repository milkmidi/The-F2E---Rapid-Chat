/* eslint no-console:0 */
const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const ROOT_PATH = path.resolve('./');


app
  .use(express.static(`${ROOT_PATH}/dist`))
  .set('view engine', 'pug');


const memoryObj = {
  users: {},
};


require('./controller/AppController')(app);

io.on('connection', (socket) => {
  const { id } = socket;
  console.log('connect', id);
  memoryObj.users[id] = true;
  socket.on('action', (action) => {
    console.log(action);
    /* const { type, data } = action;
    if (type === 'switchPage') {
      memoryObj.currentPage = data;
    } else if (type === 'vote') {
      memoryObj.vote += 1;
    }
    io.emit('action', { ...action, ...memoryObj }); */
  });
  socket.on('disconnect', () => {
    console.log('disconnect', socket.id);
    memoryObj.users[id] = false;
    delete memoryObj.users[id];
    // memoryObj.connectedCount -= 1;
    // io.emit('action', { type: 'connectedCount', data: memoryObj.connectedCount });
  });
  socket.emit('action', { type: 'connect', ...memoryObj });
});

const port = process.env.PORT || 9527;
http.listen(port, () => {
  console.log(`listening on ${port}`);
});
