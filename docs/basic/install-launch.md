# Начало работы

Для настройки [лаунчера](https://github.com/AuroraTeam/Launcher) понадобится завести аккаунт GitHub, так как сборка лаунчера происходит в той операционной системе в которой он будет запускаться.

## Создание репозитория

Для начала клонируем репозиторий к себе на аккаунт нажав на `Create a new repository` и называем его по душе.

![1.png](/foto-github/1.webp)
:::info Для справки:
Если вы не хотите чтобы у вас угнали лаунчер (в частности дизайн), создавайте Приватный репозиторий.\
Если вы собрались использовать dev версию лаунчера не забудьте поставить галочку `Include all branches`.
::::

## Добавление ключей

После настройки лаунчер-сервера в его корневой директории должен появиться файл `public.pem`. Его нужно скопировать в корень репозитория лаунчера. Это нужно чтобы лаунчсервер знал что к нему подключается оригинальный лаунчер, а не сторонние приложение.

## Настройка лаунчера

Все настройки хранятся в файле `config.ts`.

```ts [config.ts]
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

- `width` - ширина окна лаунчера (в пикселях)
- `height` - высота окна лаунчера (в пикселях)
- `frame` - должны ли отображаться стандартные рамки окна ОС
- `resizable` - есть ли возможность менять размер окна
- `maximizable` - есть ли возможность разворачивать окно на весь экран
- `fullscreenable` - есть ли возможность использовать полноэкранный режим (на F11)
- `title` - название окна лаунчера
- `ws` - URL до вашего лаунчера
- `web` - URL до вашего лаунчера
- `appPath` - как будет называться папка лаунчера у пользователя
- `discordRPC` - данный раздел настроек описан в [Настройка Discord активности](./discord-rpc.md)
