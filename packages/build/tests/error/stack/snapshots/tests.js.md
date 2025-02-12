# Snapshot report for `packages/build/tests/error/stack/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Print stack trace of lifecycle command errors

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        lifecycle:␊
          onBuild: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
    ␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 commands. Let's do this!␊
    ␊
    ┌─────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build.lifecycle.onBuild command from netlify.yml config file │␊
    └─────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "node --invalid"␊
    ␊
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
    > Error location␊
      In configuration "build.lifecycle.onBuild" command:␊
      node --invalid␊
    ␊
    ␊
    node: bad option: --invalid`

## Print stack trace of lifecycle command errors with stack traces

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        lifecycle:␊
          onBuild: node onBuild.js␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
    ␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 commands. Let's do this!␊
    ␊
    ┌─────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build.lifecycle.onBuild command from netlify.yml config file │␊
    └─────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "node onBuild.js"␊
    Error: test␊
    STACK TRACE␊
    ␊
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Command failed with exit code 2: node onBuild.js␊
    ␊
    > Error location␊
      In configuration "build.lifecycle.onBuild" command:␊
      node onBuild.js␊
    `

## Print stack trace of plugin errors

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 commands. Let's do this!␊
    ␊
    ┌─────────────────────────────────────────┐␊
    │ 1. Running onInit command from /file/path │␊
    └─────────────────────────────────────────┘␊
    ␊
    ␊
    ┌──────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └──────────────────────────────────┘␊
    ␊
    > Error message␊
      Error: test␊
    ␊
    > Error location␊
      In "onInit" event in local plugin "/file/path"␊
    STACK TRACE␊
    `

## Print stack trace of plugin errors during load

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
    ␊
    ┌──────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └──────────────────────────────────┘␊
    ␊
    > Error message␊
      Error: Could not import plugin:␊
      test␊
    ␊
    > Error location␊
      While loading local plugin "/file/path"␊
    STACK TRACE␊
    `

## Print stack trace of validation errors

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      config: /file/path␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Configuration error     │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      When resolving config file /file/path␊
      Configuration file does not exist␊
    `
