console.log('in')
const shell = require('shelljs')

let gitPath = shell.exec('git rev-parse --absolute-git-dir').stdout
gitPath = gitPath.substr(0, gitPath.length-1)
console.log(`gitPath: ${gitPath}`)

const hooksPath = `${gitPath}/hooks/pre-commit`
console.log(`hooksPath: ${gitPath}/hooks/pre-commit`)

const scriptPath = require.resolve('../template/pre-commit')
console.log(`scriptPath: ${scriptPath}`)

shell.cp(scriptPath, hooksPath)


// #! /bin/bash

// GIT_PATH=$(git rev-parse --git-dir)
// HOOK_PATH="${GIT_PATH}/hooks"

