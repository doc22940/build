# Snapshot report for `packages/build/tests/core/dry/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --dry with one event

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      dry: true␊
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
    > Netlify Build Commands␊
      For more information on build events see the docs https://github.com/netlify/build␊
    ␊
      Running `netlify build` will execute this build flow␊
    ␊
      ┌───────┬───────┐␊
      │ Event │ Location │␊
      └───────┴───────┘␊
    ␊
      If this looks good to you, run `netlify build` to execute the build␊
    `

## --dry with several events

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      dry: true␊
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
        functions: /file/path␊
        lifecycle:␊
          onBuild: echo test␊
      plugins:␊
        - package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - /file/path␊
    ␊
    > Netlify Build Commands␊
      For more information on build events see the docs https://github.com/netlify/build␊
    ␊
      Running `netlify build` will execute this build flow␊
    ␊
      ┌──────────────────┬──────────────────┐␊
      │ Event            │ Location         │␊
      └──────────────────┴──────────────────┘␊
      ┌──────────────────┐␊
      │ 1. onInit      ↓ │ Plugin /file/path␊
      └──────────────────┘ ␊
      ┌──────────────────┐␊
      │ 2. onPreBuild  ↓ │ Plugin @netlify/plugin-functions-core in build core␊
      └──────────────────┘ ␊
      ┌──────────────────┐␊
      │ 3. onBuild     ↓ │ Config netlify.yml build.lifecycle.onBuild␊
      └──────────────────┘ ␊
      ┌──────────────────┐␊
      │ 4. onPostBuild   │ Plugin @netlify/plugin-functions-core in build core␊
      └──────────────────┘ ␊
    ␊
      If this looks good to you, run `netlify build` to execute the build␊
    `

## --dry-run

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      dry: true␊
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
    > Netlify Build Commands␊
      For more information on build events see the docs https://github.com/netlify/build␊
    ␊
      Running `netlify build` will execute this build flow␊
    ␊
      ┌───────┬───────┐␊
      │ Event │ Location │␊
      └───────┴───────┘␊
    ␊
      If this looks good to you, run `netlify build` to execute the build␊
    `
