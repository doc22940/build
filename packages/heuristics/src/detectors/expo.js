const { hasRequiredDeps, hasRequiredFiles, getPackageManagerCommand, scanScripts } = require('../utils/jsdetect')
module.exports = function(projectDir) {
  // REQUIRED FILES
  if (!hasRequiredFiles(['package.json', 'app.json'], projectDir)) return false
  // REQUIRED DEPS
  if (!hasRequiredDeps(['expo'], projectDir)) return false

  /** everything below now assumes that we are within expo */

  const possibleArgsArrs = scanScripts({
    // This script will run `expo start --web` in a new Expo project.
    // Note: Expo will automatically launch the browser with your app's
    // Webpack server listening on port 19006, but the instance proxied
    // by `netlify dev` will be running on port 8888.
    preferredScriptsArr: ['web'],
    preferredCommand: 'expo start --web',
  })

  if (possibleArgsArrs.length === 0) {
    // ofer to run it when the user doesnt have any scripts setup! 🤯
    possibleArgsArrs.push(['expo', 'start', '--web'])
  }
  return {
    framework: 'expo',
    language: 'js',
    command: getPackageManagerCommand(projectDir),
    port: 8888,
    proxyPort: 19006,
    env: { ...process.env },
    possibleArgsArrs,
    urlRegexp: new RegExp(`(http://)([^:]+:)${19006}(/)?`, 'g'),
    dist: 'web-build',
  }
}