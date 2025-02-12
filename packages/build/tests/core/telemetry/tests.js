const test = require('ava')

const { runFixture } = require('../../helpers/main')
const { startServer } = require('../../helpers/server.js')

// Normalize telemetry request so it can be snapshot
const normalizeSnapshot = function({ body, ...request }) {
  return { ...request, body: normalizeBody(body) }
}

const normalizeBody = function({
  anonymousId,
  meta: { timestamp, ...meta } = {},
  properties: { duration, isCI, buildVersion, nodeVersion, osPlatform, osName, ...properties } = {},
  ...body
}) {
  return {
    ...body,
    anonymousId: typeof anonymousId,
    meta: { ...meta, timestamp: typeof timestamp },
    properties: {
      ...properties,
      duration: typeof duration,
      isCI: typeof isCI,
      buildVersion: typeof buildVersion,
      nodeVersion: typeof nodeVersion,
      osPlatform: typeof osPlatform,
      osName: typeof osName,
    },
  }
}

const TELEMETRY_PATH = '/collect'

test('Telemetry success', async t => {
  const { scheme, host, request, stopServer } = await startServer(TELEMETRY_PATH)
  await runFixture(t, 'success', {
    flags: '--site-id=test',
    env: { BUILD_TELEMETRY_DISABLED: '', TEST_SCHEME: scheme, TEST_HOST: host },
    snapshot: false,
  })
  await stopServer()
  const snapshot = normalizeSnapshot(request)
  t.snapshot(snapshot)
})

test('Telemetry disabled', async t => {
  const { scheme, host, request, stopServer } = await startServer(TELEMETRY_PATH)
  await runFixture(t, 'success', {
    flags: '--site-id=test',
    env: { BUILD_TELEMETRY_DISABLED: 'true', TEST_SCHEME: scheme, TEST_HOST: host },
    snapshot: false,
  })
  await stopServer()
  t.false(request.sent)
})

test('Telemetry error', async t => {
  const { stopServer } = await startServer(TELEMETRY_PATH)
  await runFixture(t, 'success', {
    flags: '--site-id=test',
    env: { BUILD_TELEMETRY_DISABLED: '', TEST_HOST: '...' },
  })
  await stopServer()
})
