const shell = require('shelljs')
const { dockerComposePath } = require('../utils/path')

class Docker {
  constructor() {
    this.dockerComposePath = dockerComposePath
  }

  run(str) {
    shell.exec(`docker-compose -f ${this.dockerComposePath} ${str}`)  
  }

  start(dockerContainer) {
    this.run(`start ${dockerContainer}`)
  }

  startAll() {
    this.run('-d up')
  }

  stop(dockerContainer) {
    this.run(`stop ${dockerContainer}`)
  }

  stopAll() {
    this.run('stop')
  }
}

const docker = new Docker()

module.exports = docker
