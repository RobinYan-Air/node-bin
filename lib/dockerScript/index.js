const shell = require('shelljs')

const { dockerComposePath } = require('../utils/path')

class Docker {
  constructor() {
    this.dockerComposePath = dockerComposePath
    this.neededPorts = []
    this.startedByMe = false
  }

  run(str) {
    shell.exec(`docker-compose -f ${this.dockerComposePath} ${str}`)
  }

  start(dockerContainer) {
    this.run(`start ${dockerContainer}`)
  }

  startAll() {
    this.run('up -d')
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
