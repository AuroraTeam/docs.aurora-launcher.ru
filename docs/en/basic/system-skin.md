# Setting up skins system

For the skin system to work, a service is needed that can return a file by nickname or uuid, the contents of which will be the texture of a skin or cloak.
Example of implementing requests: [api.aurora-launcher](https://api.aurora-launcher.ru/#tag/mojang/GET/mojang/skin)

```hjson
skin:
    {
        skinUrl: http://localhost:8123/storage/skin?uuid={uuid}
        capeUrl: http://localhost:8123/storage/cape?uuid={uuid}
    }
```

##### Description of settings
- `skinUrl` - URL to the file with the skin
- `capeUrl` - URL to the file with the cloak

##### Description of fillers

- `{uuid}` - Stores the user's uuid
- `{username}` - Stores the user's nickname