const shell = require('shelljs')
const chalk = require('chalk')

const { IDECheck } = require('../utils/binChecker')
const { binPath } = require('../utils/path')
const prepareSettingForDebug = require('../utils/prepareSettingForDebug')

module.exports = () => {
  if(!IDECheck()) {
    console.info(chalk.yellow('Please use VSCODE to debug the code'))
  }

  prepareSettingForDebug()

  shell.exec(`nodemon --inspect-brk ${binPath}`)
}
