import http from 'http';
import {
  json
} from 'express';

let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;
let port = process.env.PORT || 3000
var jsonenv = JSON.stringify(process.env);
var obj = JSON.parse(jsonenv);
port = obj.PORT || 3000
server
    .listen(port, () => {
      console.log('🚀 started %d', port);
    })
    .on('error', error => {
      console.log(error);
    });

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}