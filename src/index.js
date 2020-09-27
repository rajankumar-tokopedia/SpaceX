import http from 'http';

let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;
const port = process.env.port || 3000
console.log(process.env.port, JSON.stringify(process.env));
console.log(process.env);
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