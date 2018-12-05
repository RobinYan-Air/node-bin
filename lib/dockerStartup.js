const shell = require('shelljs');
const { resolve } = require('path')

module.exports = () => {
  const executePath = process.cwd()
  const dockerExecPath = resolve(executePath, './build')
  try {
    const dockerComposeFile = require.resolve(resolve(dockerExecPath, './docker-compose.yml'))
    console.log(`Find docker compose file: ${dockerComposeFile}, exec docker `)
    shell.cd(dockerExecPath)
    shell.exec('docker-compose up -d')
    shell.cd(executePath)
  } catch (error) {
    console.error(`Could not find file<docker-compose.yml> under ${dockerExecPath}`)
  }
}