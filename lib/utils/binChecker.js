const { vscPath } = require('../utils/path')

const appCheck = (app) => {
  try {
    return require.resolve(app)
  } catch (error) {
    console.error(`FATAL: App<${app}> not found...`)
    return undefined
  }
}

const IDECheck = () => {
  return !!vscPath
}

module.exports = {
  appCheck,
  IDECheck
}