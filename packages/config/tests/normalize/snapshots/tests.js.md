# Snapshot report for `packages/config/tests/normalize/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Multiline commands

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onInit": "echo test/necho test"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }`

## build.command

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onBuild": "echo test"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }`

## build.command and build.lifecycle.onbuild

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onBuild": "echo onBuild"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }`

## build.lifecycle empty

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {}␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }`

## build.lifecycle.build

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onBuild": "echo test"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }␊
    ␊
    Configuration property build.lifecycle.build is deprecated. It should be renamed to 'onBuild'.␊
    ␊
    Invalid syntax␊
    ␊
      build:␊
        lifecycle:␊
          build: echo test␊
    ␊
    Valid syntax␊
    ␊
      build:␊
        lifecycle:␊
          onBuild: npm run build␊
    `

## build.lifecycle.finally

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onEnd": "echo test"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }␊
    ␊
    Configuration property build.lifecycle.finally is deprecated. It should be renamed to 'onEnd'.␊
    ␊
    Invalid syntax␊
    ␊
      build:␊
        lifecycle:␊
          finally: echo test␊
    ␊
    Valid syntax␊
    ␊
      build:␊
        lifecycle:␊
          onEnd: npm run build␊
    `

## build.lifecycle.onbuild case

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onBuild": "echo test"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }`

## build.lifecycle.prebuild case

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {␊
            "onPreBuild": "echo test"␊
          }␊
        },␊
        "plugins": []␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }␊
    ␊
    Configuration property build.lifecycle.prebuild is deprecated. It should be renamed to 'onPreBuild'.␊
    ␊
    Invalid syntax␊
    ␊
      build:␊
        lifecycle:␊
          prebuild: echo test␊
    ␊
    Valid syntax␊
    ␊
      build:␊
        lifecycle:␊
          onPreBuild: npm run build␊
    `

## plugins[*].config

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {}␊
        },␊
        "plugins": [␊
          {␊
            "inputs": {␊
              "test": "test"␊
            },␊
            "package": "/file/path"␊
          }␊
        ]␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }␊
    ␊
    Configuration property plugins[0].config has been renamed to "inputs".␊
    ␊
    Invalid syntax␊
    ␊
      plugins:␊
        - config:␊
            test: test␊
    ␊
    Valid syntax␊
    ␊
      plugins:␊
        - package: /file/path␊
          inputs:␊
            test: test␊
    `

## plugins[*].type

> Snapshot 1

    `{␊
      "branch": "branch",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "build": {␊
          "environment": {},␊
          "lifecycle": {}␊
        },␊
        "plugins": [␊
          {␊
            "package": "/file/path"␊
          }␊
        ]␊
      },␊
      "configPath": "/file/path",␊
      "context": "production",␊
      "siteInfo": {}␊
    }␊
    ␊
    Configuration property plugins[0].type has been renamed to "package".␊
    ␊
    Invalid syntax␊
    ␊
      plugins:␊
        - type: /file/path␊
    ␊
    Valid syntax␊
    ␊
      plugins:␊
        - package: /file/path␊
    `
