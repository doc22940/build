const test = require('ava')
const cpy = require('cpy')
const execa = require('execa')

const { runFixture, FIXTURES_DIR } = require('../../helpers/main')
const { createRepoDir, removeDir } = require('../../helpers/dir')

test('Context with context CLI flag', async t => {
  await runFixture(t, 'context_flag')
})

test('Context with branch CLI flag', async t => {
  await runFixture(t, 'branch', { flags: '--branch=testBranch' })
})

test('Context with branch environment variable', async t => {
  await runFixture(t, 'branch', { env: { BRANCH: 'testBranch' } })
})

test('Context with branch git', async t => {
  const cwd = await createRepoDir()
  try {
    await cpy(`${FIXTURES_DIR}/branch/*`, cwd)
    await execa.command('git checkout -b testBranch', { cwd })
    await runFixture(t, 'branch', { repositoryRoot: cwd })
  } finally {
    await removeDir(cwd)
  }
})

test('Context with branch fallback', async t => {
  const cwd = await createRepoDir({ git: false })
  try {
    await cpy(`${FIXTURES_DIR}/branch_fallback/*`, cwd)
    await runFixture(t, 'branch_fallback', { repositoryRoot: cwd })
  } finally {
    await removeDir(cwd)
  }
})

test('Context deep merge', async t => {
  await runFixture(t, 'deep_merge')
})

test('Context array merge', async t => {
  await runFixture(t, 'array_merge')
})

test('Context merge priority', async t => {
  await runFixture(t, 'priority_merge', { flags: '--branch=testBranch' })
})
