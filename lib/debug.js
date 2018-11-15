const shell = require('shelljs');

const binPath = require.resolve('./dev.js')

shell.exec(`node --inspect-brk=43145 ${binPath}`)