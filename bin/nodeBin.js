#!/usr/bin/env node

/* eslint no-unused-expressions: "off" */

const yargs = require('yargs');
const path = require('path');
// const { exec } = require('child_process');

const { version } = require('../package.json');

yargs
  .version(version)
  // .command('dev [filename]', 'run the server', (_yargs) => {
  //   _yargs
  //     .positional('filename', {
  //       describe: 'dev: startup file',
  //       type: 'string'
  //     })
  //     .version(false);
  // }, () => {
  //   require('../lib/startUp/nodemon');
  // })
  .command('dev', 'Run the dev server', (argv) => {
    require('../lib/startUp')(argv);
  })
  // .command('start', 'start the server', (argv) => {
  //   // const cmd = `node ${path.resolve(__dirname, '../lib/startUp/server')}`;
  //   // exec(cmd, (err, stdout, stderr) => {
  //   //   console.log('err', err);
  //   //   console.log('stdout', stdout);
  //   //   console.log('stderr', stderr);
  //   // });
  //   require('../lib/startUp/server');
  // })
  .argv;