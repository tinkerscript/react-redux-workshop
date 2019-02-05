const WebSocket = require('ws');
const avatars = require('./avatars');

const wss = new WebSocket.Server({ port: 3219 })

const users = [];
const remotes = {};

const broadcast = (data, ws, all = false) => {
  wss.clients.forEach(client => {
    const target = all ? true : client !== ws;
    if (client.readyState === WebSocket.OPEN && target) {
      client.send(JSON.stringify(data));
    }
  });
}

wss.on('connection', async (ws, req) => {
  let address = req.connection.remoteAddress;

  if (address.indexOf('::ffff:') > -1) {
    address = address.slice(7);
  }

  if (!remotes[address]) {
    const random = Math.floor(Math.random() * avatars.length);
    const avatar = avatars[random] || '👽';
    avatars.splice(random, 1);
    remotes[address] = avatar;
  }

  const index = users.length;
  users.push(`${remotes[address]} [${address}]`);

  broadcast({
    type: 'GET_USERS_LIST',
    users: [...new Set(users)]
  }, ws, true);

  ws.on('message', (message) => {
    const data = JSON.parse(message)
    console.log(message)

    switch (data.type) {
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          text: data.text,
          author: remotes[address]
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    users.splice(index, 1)
    broadcast({
      type: 'GET_USERS_LIST',
      users
    }, ws)
  })
});
