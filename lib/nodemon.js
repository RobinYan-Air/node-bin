const shell = require('shelljs');

const binPath = require.resolve('./dev.js')

shell.exec(`nodemon ${binPath}`)
