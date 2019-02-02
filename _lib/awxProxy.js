const chalk = require('chalk')
const shellJs = require('shelljs')

const checkDocker = () => new Promise((resolve, reject) => {
  shellJs.exec('docker ps | grep postgres', function(code, stdout, stderr) {
    if(stderr) {
      return reject(stderr)
    }
    if(stdout.indexOf('5432') > 0) {
      shellJs.exec('docker stop postgres', function(code, stdout, stderr) {
        if(stderr) {
          return reject(stderr)
        }
        if(stdout.length > 0) {
          return resolve()
        }
      })
    } else {
      return resolve()
    }
  })
})


const main = () => {
  const path = process.env['__AWX_DEPLOYMENT_PATH__']
  if(!path) {
    console.info(chalk.red('ENV<__AWX_DEPLOYMENT_PATH__> could not be found, please run \'yarn prepareFeature\' first'))
  }

  console.log(path)
  const cwd = process.cwd()
  shellJs.cd(path)
  shellJs.exec('./awx proxy stage0/postgres,', function() {
    shellJs.cd(cwd)
    shellJs.exec('node')
  })
}

main()
// module.exports?