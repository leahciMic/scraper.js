const WebSocket = require('ws');
const Events = require('events');

const wss = new WebSocket.Server({ port: 4101 });

class StatusServer extends Events {
  constructor(socket) {
    super();
    this.socket = socket;
    this.socket.on('connection', (ws) => {
      ws.on('message', (raw) => {
        const message = JSON.parse(raw);
        if (message.type === 'SYNC') {
          this.sync(ws);
        }
      });
    });
  }

  sync(ws) {
    this.emit('sync', ws.send.bind(ws));
  }

  update(data) {
    this.socket.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: 'UPDATE',
          data,
        }));
      }
    });
  }
}

const statusServer = new StatusServer(wss);

module.exports = statusServer;
