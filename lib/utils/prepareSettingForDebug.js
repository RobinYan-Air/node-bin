const shell = require('shelljs')

const { vscPath, vscSettingPath } = require('../utils/path')

const KEY = 'debug.node.autoAttach'

module.exports = () => {
  const path = `${vscPath}/setting.json`
  if(!vscSettingPath) {
    shell.exec(`cp ${resolve(__dirname, '../template/vsCodeSettingsTemplate.json')} ${path}`)
  } else {
    const settings = require(vscSettingPath)
    if (!settings[KEY] || settings[KEY] !== 'on') {
      settings[KEY] = 'on'
    }
    shell.echo(JSON.stringify(settings, null, ' ')).to(path)
  }
}
