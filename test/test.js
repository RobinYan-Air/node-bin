const yaml = require('js-yaml')
const fs   = require('fs')
const {exec} = require('shelljs')

// let neededPorts = []
// let port = []
// try {
//     var {services} = yaml.safeLoad(fs.readFileSync('/Users/robin.yan/project/airwallex-airboard-ng/service/build/docker-compose.yml', 'utf8'));
//     for(let key in services) {
//         port = port.concat(services[key].ports || [])
//       }
//       neededPorts = port.map((p) => p.split(':')[0]).filter(p => p !== '0')
//       console.log(neededPorts)
// } catch (e) {
//     console.log(e);
// }
exec('lsof -i:8080', function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  })