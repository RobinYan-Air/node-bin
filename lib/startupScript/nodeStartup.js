const http = require('http')
const chalk = require('chalk')

const { appCheck } = require('../utils/binChecker')

const defaultModuleName = '@meatpie/node-base'
const port = process.env.PORT || 10086

const startup = (m) => {
  const moduleName = m || defaultModuleName
  const pkg = appCheck(moduleName)

  if(!pkg) {
    throw Error(`No ${chalk.red(moduleName)} found, please run 'yarn add ${moduleName}' to install`)
  }
  
  const App = require(pkg).App
  const app = new App()
  const server = http.createServer(app.callback())

  app.ready(startServer)

  function startServer() {
    server.listen(port, () => {
      console.info(`Server started at port ${chalk.blue(port)}`)
      app.handleStart && app.handleStart()
    })
  }

  function closeServer() {
    console.info('Server will be closed in 5 seconds...')
    app.handleClose()
    setTimeout(() => {
      server.close(() => {
        console.info('Server closed')
        process.exit(0)
      })
    }, 5000)
  }

  process.on('SIGTERM', closeServer)
  process.on('SIGINT', closeServer)
  process.on('SIGQUIT', closeServer)
  
}

module.exports = startup
