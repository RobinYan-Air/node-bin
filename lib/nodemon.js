const nodemon = require('nodemon')
const { resolve } = require('path')

module.exports = () => {
  nodemon(resolve(__dirname, './dev.js'))

  nodemon.on('start', (err)=> {
    console.log('server started via NODEMON')
  })
}
