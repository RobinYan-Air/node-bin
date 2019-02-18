console.log('in')
const shell = require('shelljs')

const gitPath = shell.exec('git rev-parse --git-dir').stdout
console.log(`gitPath: ${gitPath}`)

const hooksPath = `${gitPath}/hooks`
console.log(`hooksPath: ${hooksPath}`)

const scriptPath = require.resolve('../template/pre-commit')
console.log(`scriptPath: ${scriptPath}`)

shell.cp(scriptPath, hooksPath)


// #! /bin/bash

// GIT_PATH=$(git rev-parse --git-dir)
// HOOK_PATH="${GIT_PATH}/hooks"

