#!/usr/bin/env node

/* eslint no-unused-expressions: "off" */

const yargs = require('yargs')

const { version } = require('../package.json')

yargs
  .version(version)
  .command('local', 'Run local server', (argv) => {
    require('../lib/binScript/local')(argv)
  })
  .command('debug', 'Debug node server', (argv) => {
    require('../lib/binScript/debug')(argv)
  })
  .command('start', 'Start the server', (argv) => {
    require('../lib/binScript/start')(argv)
  })
  .command('docker-start', 'Start local docker containers via docker-compose.yml', (argv) => {
    require('../lib/binScript/docker').start(argv)
  })
  .command('docker-stop', 'Stop local docker containers listed in docker-compose.yml', (argv) => {
    require('../lib/binScript/docker').stop(argv)
  })
  // .command('featureDev', 'debug node server for feature developer', (argv) => {
  //   require('../lib/featureDev')(argv);
  // })
  // .command('prepareFeatureDev', 'debug node server for feature developer', (argv) => {
  //   require('../lib/prepareFeature')(argv);
  // })
  .argv;