const shell = require('shelljs');

const binPath = require.resolve('./startup.js')

shell.exec(`nodemon ${binPath}`)
