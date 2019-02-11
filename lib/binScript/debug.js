const shell = require('shelljs')
const chalk = require('chalk')
const nodemon = require('nodemon')

const { IDECheck } = require('../utils/binChecker')
const { binPath } = require('../utils/path')
const prepareSettingForDebug = require('../utils/prepareSettingForDebug')
const docker = require('../dockerScript')

module.exports = () => {
  if(!IDECheck()) {
    console.info(chalk.yellow('Please use VSCODE to debug the code'))
  }

  prepareSettingForDebug()

  docker.startAll()
  nodemon(`--inspect-brk ${binPath}`)
  nodemon.on('quit', () => {
    docker.stopAll()
    console.log('App has quit')
    process.exit()
  })
}
