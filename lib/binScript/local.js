const nodemon = require('nodemon')

const { binPath } = require('../utils/path')
const docker = require('../dockerScript')

module.exports = () => {
  docker.startAll()
  nodemon(binPath)

  nodemon.on('quit', () => {
    docker.stopAll()
    console.log('App has quit')
    process.exit()
  })
}
