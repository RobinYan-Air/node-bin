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
    require('../lib/binScript/start')(argv);
  })
  // .command('featureDev', 'debug node server for feature developer', (argv) => {
  //   require('../lib/featureDev')(argv);
  // })
  // .command('prepareFeatureDev', 'debug node server for feature developer', (argv) => {
  //   require('../lib/prepareFeature')(argv);
  // })
  .argv;