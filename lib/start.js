const path = require('path')
const http = require('http')

const startup = () => {
  const libPath = path.resolve(process.cwd(), 'node_modules')

  const App = require(`${libPath}/@meatpie/node-base`).App
  const app = new App();
  const server = http.createServer(app.callback());
  app.ready(startServer)

  function startServer() {
    server.listen(3000)
  }
}

module.exports = startup
