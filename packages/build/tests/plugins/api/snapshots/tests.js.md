# Snapshot report for `packages/build/tests/plugins/api/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --site-id

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
      siteId: test␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      {}␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
    ␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 commands. Let's do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --token

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
      {}␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
    ␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 commands. Let's do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## NETLIFY_AUTH_TOKEN environment variable

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
    [ { id: 'test' } ]␊
    ␊
     √  /file/path onInit completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## api call

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
    [ { id: 'test' } ]␊
    ␊
     √  /file/path onInit completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## default scopes

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
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: This plugin is not authorized to use "api.listSites". Please update the plugin scopes.␊
    ␊
    > Error location␊
      In "onInit" event in local plugin "/file/path"␊
    STACK TRACE␊
    `

## feature flag

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
    true␊
    ␊
     √  /file/path onInit completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## scopes but no token

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
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: This plugin requires a Netlify API authentication token␊
    ␊
    > Error location␊
      While loading local plugin "/file/path"␊
    `

## star scopes

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
    [ { id: 'test' } ]␊
    ␊
     √  /file/path onInit completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## wrong scopes

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
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: This plugin is not authorized to use "api.listSites". Please update the plugin scopes.␊
    ␊
    > Error location␊
      In "onInit" event in local plugin "/file/path"␊
    STACK TRACE␊
    `
