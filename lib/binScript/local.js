const shell = require('shelljs');

const { binPath } = require('../utils/path')


module.exports = () => {
  shell.exec(`nodemon ${binPath}`)
}
