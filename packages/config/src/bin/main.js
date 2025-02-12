#!/usr/bin/env node
const {
  exit,
  env: { NETLIFY_BUILD_TEST },
} = require('process')

const { stableStringify } = require('fast-safe-stringify')

require('../utils/polyfills')

const { isUserError } = require('../error')
const resolveConfig = require('../main')

const { parseFlags } = require('./flags')

// CLI entry point
const runCli = async function() {
  const { stable, ...flags } = parseFlags()

  try {
    const result = await resolveConfig(flags)
    handleCliSuccess(result, stable)
  } catch (error) {
    handleCliError(error)
  }
}

// The result is printed as JSON on stdout on success (exit code 0)
const handleCliSuccess = function(result, stable) {
  const resultA = serializeApi(result)
  const stringifyFunc = stable ? stableStringify : JSON.stringify
  const resultJson = stringifyFunc(resultA, null, 2)
  console.log(resultJson)
  exit(0)
}

// `api` is not JSON-serializable, so we remove it
// We still indicate it as a boolean in tests
const serializeApi = function({ api, ...result }) {
  if (NETLIFY_BUILD_TEST !== '1' || api === undefined) {
    return result
  }

  return { ...result, hasApi: true }
}

const handleCliError = function(error) {
  // Errors caused by users do not show stack traces and have exit code 1
  if (isUserError(error)) {
    console.error(error.message)
    return exit(1)
  }

  // Internal errors / bugs have exit code 2
  console.error(error.stack)
  exit(2)
}

runCli()
