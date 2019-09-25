const path = require('path')

const { fileExists, readDir } = require('../../utils/fs')
const { CONTEXT } = process.env

module.exports = () => {
  return {
    /* Plugin namespace */
    name: '@netlify/deploy',
    onError: ({ error }) => {
      console.log('do something with error', error.message)
      if (error.message.match(/invalid json response body/)) {
        console.log('Attempt to correct build')
      }
    },
    /* Hook into buildFunctions lifecycle */
    deploy: async ({ netlifyConfig, constants, api }) => {
      const { build } = netlifyConfig
      if (!build || !build.publish) {
        console.log('No publish directory set. Skipping deploy step')
        return false
      }

      const publishPath = path.resolve(build.publish)
      if (!(await fileExists(publishPath))) {
        console.log(`Publish dir not found`)
        process.exit(1)
      }

      const files = await readDir(publishPath)
      if (!files || !files.length) {
        console.log(`No files found in publish dir`)
        process.exit(1)
      }

      const deployToProduction = CONTEXT === 'production'

      if (!constants.siteId) {
        console.log(`No siteId found`)
        // return false
      }

      try {
        console.log('Deploying site...')
        await api.deploy(constants.siteId, publishPath, {
          configPath: constants.CONFIG_PATH,
          fnDir: build.functions,
          statusCb: () => {},
          draft: !deployToProduction,
          message: 'Site deployed from @netlify/build'
        })
      } catch (err) {
        console.log('Deploying site error')
        throw new Error(err)
      }
    }
  }
}