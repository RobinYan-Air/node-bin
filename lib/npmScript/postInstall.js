#!/usr/bin/env node

const shell = require('shelljs')

const gitPath = shell.exec('git rev-parse --git-dir').stdout
const hooksPath = `${gitPath}/hooks`

const scriptPath = require.resolve('../template/pre-commit')

shell.cp(scriptPath, hooksPath)


// #! /bin/bash

// GIT_PATH=$(git rev-parse --git-dir)
// HOOK_PATH="${GIT_PATH}/hooks"

