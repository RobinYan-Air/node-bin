const http = require('http')

const chalk = require('chalk');

const checkApp = require('./check')

const moduleName = '@meatpie/node-base'
const port = process.env.PORT || 10086

const startup = () => {
  const pkg = checkApp(moduleName)

  if(!pkg) {
    throw Error(`No ${chalk.red(moduleName)} found, please run 'yarn add ${moduleName}' to install`)
  }
  
  const App = require(pkg).App
  const app = new App();
  const server = http.createServer(app.callback());
  app.ready(startServer)
  
  function startServer() {
    server.listen(port, () => {
      console.log(`Server started at port ${chalk.blue(port)}`)
    })
  }
  
}

module.exports = startup
