const ora = require('ora')
const shelljs = require('shelljs')
const chalk = require('chalk')

const spinner = ora('Prepare env for feature development...').start()
spinner.color = 'yellow'

const checkPath = () => process.env['__AWX_DEPLOYMENT_PATH__']

const searchPath = (filename) => new Promise((resolve, reject) => {
  shelljs.exec(`find ~ -name ${filename}`, function(code, stdout, stderr) {
    if(code === 0) {
      return resolve(stdout)
    }
    console.log(`Check path<${filename}> error:`, stderr)
    return reject(stderr)
  });
})

const setEnvVarible = async () => {
  try {
    // const path = await searchPath('airwallex-deployments')
    const path = '/Users/robin.yan/project/airwallex-deployments\n'
    
    if(path.length === 0) {
      console.info(chalk.red('Project<airwallex-deployments> could not be found'))
      console.info(chalk.blue('You might have below errors:'))
      console.info(chalk.blue('1. No project<airwallex-deployments> cloned in your pc:'))
      console.info(chalk.blue('    run \'git clone git@github.com:airwallex/airwallex-deployments.git\' at any folder you want'))
      console.info(chalk.blue('    run \'yarn prepareFeature\' again'))
      console.info(chalk.blue('2. Project<airwallex-deployments> has already been cloned, but it could not be searched by this program:'))
      console.info(chalk.blue('    manully set system env varible<__AWX_DEPLOYMENT_PATH__> as the path to your project')) 
      
      spinner.stop()
      return
    } 

    if (path.length - 1 > path.indexOf('\n')) {
      console.info(chalk.red('Too many Project<airwallex-deployments> have been found'))
      console.info(chalk.blue('    Please manully set system env varible<__AWX_DEPLOYMENT_PATH__> as the path to your actual project')) 
    
      spinner.stop()
      return
    }

    shelljs.exec(`echo export __AWX_DEPLOYMENT_PATH__="${path.substr(0, path.length - 1)}">>~/.bash_profile`, () => {
      shelljs.exec('source ~/.bash_profile')
    })
    // shelljs.echo(`export __AWX_DEPLOYMENT_PATH__="${path.substr(0, path.length - 1)}"`).to('~/.bash_profile')
    spinner.stop()
  } catch(e) {
    spinner.stop()
  }
}

const awxDeploymentPath = checkPath()
if(!awxDeploymentPath) {
  setEnvVarible()
}

spinner.stop()
console.info('enjoy')