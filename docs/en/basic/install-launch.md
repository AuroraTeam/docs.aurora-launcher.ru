# Getting started work

To configure the [Launcher](https://github.com/AuroraTeam/Launcher) you will need to create a GitHub account, since the launcher is built in the operating system in which it will be launched.

## Creating repository

First, clone the repository to your account by clicking on `Create a new repository` and name it to your liking.

![1.png](/foto-github/1.webp)
:::info For reference:
If you don't want your launcher (especially the design) to be stolen, create a Private repository.\
If you are going to use the dev version of the launcher, don't forget to check the `Include all branches` checkbox.
::::

## Adding a key

After setting up the Launcher Server, a `public.pem` file should appear in its root directory. You needs to copied it to the root of the Launcher repository. This is necessary so that the Launcher Server knows that the original Launcher is connecting to it, and not a third-party application.

## Setting up Launcher

All settings are stored in the `config.ts` file.

```ts
import publicKey from "./public.pem";

export const window = {
  width: 900,
  height: 550,
  frame: false,
  resizable: false,
  maximizable: false,
  fullscreenable: false,
  title: "Aurora Launcher",
};

export const api = {
  ws: "ws://127.0.0.1:1370/ws",
  web: "http://127.0.0.1:1370",
  publicKey,
};

export const appPath = ".aurora-launcher";

export const discordRPC = {
  appId: '1214685301793103902',
  default: {
    firstLineText: 'Тестирую лаунчер',
    secondLineText: 'Чувак, ты думал здесь что-то будет?',
    buttons: [
      {
        label: 'Прекол',
        url: 'https://youtu.be/dQw4w9WgXcQ',
      },
    ],
    largeImageKey: 'logo',
    smallImageKey: 'logo_mc',
    largeImageText: 'Aurora Launcher',
    smallImageText: 'Minecraft',
  },
  profile: {...},
  game: {...}
};
```

##### Описание настроек конфига

- `width` - Launcher window width (in pixels)
- `height` - Launcher window height (in pixels)
- `frame` - should the standard OS window frames be displayed
- `resizable` - the ability to change the window size
- `maximizable` - the ability to expand the window to full screen
- `fullscreenable` - ability to use full screen mode (on F11)
- `title` - Launcher window title
- `ws` - URL to your Launcher
- `web` - URL to your Launcher
- `appPath` - what will be the name of the Launcher folder for the user
- `discordRPC` - this section of settings is described in [Setting up Discord activity](./discord-rpc.md)
