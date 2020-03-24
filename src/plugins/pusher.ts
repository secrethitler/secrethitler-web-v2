import Pusher from 'pusher-js';
import http from './http';

const pusher = new Pusher('dbaa9e20ac7717618b2a', {
  // authEndpoint: 'https://geheimerdeutscher.tk/api',
  cluster: 'eu',
  authorizer: ({ name }) => ({
    authorize: async (socketId, callback) => {
      try {
        const res = await http.post('/pusher/auth', {
          socketId,
          channelName: name,
        });

        callback(false, res.data);
      } catch (err) {
        alert('Error connecting to websocket.');
      }
    },
  }),
  // forceTLS: true,
});

export default pusher;
