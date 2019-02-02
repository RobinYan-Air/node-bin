const shell = require('shelljs')
const chalk = require('chalk')
const { resolve } = require('path')

const KEY = 'debug.node.autoAttach'
const SETTING_FILE = '.vscode/settings.json'
const BIN_PATH = require.resolve('./startup.js')
const dockerStartup = require('./dockerStartup')


module.exports = () => {
  dockerStartup()

  console.info(chalk.yellow('Please use VSCODE to debug the code'))
  const path = resolve(process.cwd(), `../${SETTING_FILE}`)
  try {
    require.resolve(path)
  } catch({code}) {
    if(code === 'MODULE_NOT_FOUND') {
      shell.exec(`cp ${resolve(__dirname, './settingsTemplate.json')} ${path}`)
    }
  }

  const settings = require(path)
  if(!settings[KEY] || settings[KEY] !== 'on'){
    settings[KEY] = 'on'
  }
  shell.echo(JSON.stringify(settings)).to(path)

  shell.exec(`nodemon --inspect-brk ${BIN_PATH}`)
}
