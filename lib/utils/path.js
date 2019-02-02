const findUp = require('find-up')

const FN_INIT_PATH = Symbol('path#initPath')
const FN_RESOLVE_PATH = Symbol('path#resolvePath')
const OBJ_PATH = Symbol('path#totalPath')

class NodeBinPath {
  constructor() {
    this[OBJ_PATH] = {}
    this[FN_INIT_PATH]()
  }

  [FN_INIT_PATH]() {
    this[OBJ_PATH].binPath = this[FN_RESOLVE_PATH]('../startupScript/startupBin')
    this[OBJ_PATH].rootPath = findUp.sync('airwallex-airboard-ng')
    this[OBJ_PATH].vscPath = findUp.sync('.vscode')
    this[OBJ_PATH].vscSettingPath = this[OBJ_PATH].vscPath ? this[FN_RESOLVE_PATH](`${this[OBJ_PATH].vscPath}/settings.json`) : null
  }

  [FN_RESOLVE_PATH](path) {
    try {
      return require.resolve(path)
    } catch(err) {
      console.error(`Resolve Path<${path}> error: \n${err}`)
      return null
    }
  }

  get binPath() {
    return this[OBJ_PATH].binPath
  }

  get vscPath() {
    return this[OBJ_PATH].vscPath
  }

  get vscSettingPath() {
    return this[OBJ_PATH].vscSettingPath
  }

  get buildPath() {
    if(!this[OBJ_PATH].rootPath) {
      throw 'Could not find airwallex-airboard-ng'
      return
    }
    return `${this[OBJ_PATH].rootPath}/service/build`
  }

  get dockerComposePath() {
    return `${this.buildPath}/docker-compose.yml`
  }
}

const instance = new NodeBinPath()

module.exports = instance
