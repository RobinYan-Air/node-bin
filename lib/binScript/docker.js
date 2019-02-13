const docker = require('../dockerScript')

const start = () => {
  docker.startAll()
}

const stop = () => {
  docker.stopAll()
}

module.exports = {
  start,
  stop
}