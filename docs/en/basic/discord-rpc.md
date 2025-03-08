# Setting up Discord activity

```ts [config.ts]
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

##### Description settings up Discord activity

- `appId` - application ID
- `firstLineText` - first line of text
- `secondLineText` - second line of text
- `buttons` - buttons with links to websites (there may be several)
- `label` - text in the button
- `url` - link to website
- `largeImageKey` - main image name of the application
- `smallImageKey` - the name of the small (in the lower right corner of the main) image of the application
- `largeImageText` - what text will be when hovering over the main image
- `smallImageText` - what text will be when hovering over a small image
- `default` - the status that will be in the authorization window, profile selection
- `profile` - the status that will be in the download window, game launch
- `game` - status that will be during the game
:::info For reference:
The topmost bold line is the name of the application that you gave when creating it.
::::

##### Description of fillers

- `{server}` - stores the name of the profile that the player has selected.
- `{nickname}` - stores the player's nickname
:::info For reference:
Placeholders only work in `profile` and `game` statuses.
:::

## Where to find appId?

First, you need to log in to the [Discord Developer](https://discord.com/developers) website and create your first application.
After creating, you need to copy this ID.
![1.png](/discord-developer/1.webp)

## Where to upload images?

Go to the `Rich Presence` => `Art Assets` tab and through the `Add Image(s)` button upload the image you will use. After selecting, your image will appear in the list below. Name it whatever you want and you will use this name in the settings.
![2.png](/discord-developer/2.webp)
