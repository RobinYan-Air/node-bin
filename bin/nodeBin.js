#!/usr/bin/env node

/* eslint no-unused-expressions: "off" */

const yargs = require('yargs');
const path = require('path');
// const { exec } = require('child_process');

const { version } = require('../package.json');

yargs
  .version(version)
  .command('dev', 'Run the dev server', (argv) => {
    require('../lib/nodemon')(argv);
  })
  .command('start', 'Start the server', (argv) => {
    require('../lib/start')(argv);
  })
  .argv;