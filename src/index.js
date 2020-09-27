import http from 'http';

let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;
console.log(process.env, typeof process.env)
var p = process.env
console.log(p)
console.log(p.PORT,p.NODE_ENV,p.HOME)
console.log(process.env["PORT"],process.env.PORT, " port")
server.listen(process.env.PORT,() => {
      console.log('🚀 started %d',process.env.PORT);
    }).on('error', error => {
      console.log("\nAppError :: " ,error);
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
