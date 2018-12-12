const shell = require('shelljs');
const dockerStartup = require('./dockerStartup')

dockerStartup()

const binPath = require.resolve('./startup.js')


shell.exec(`nodemon ${binPath}`)
