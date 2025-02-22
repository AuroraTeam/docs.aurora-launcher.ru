# Game clients

When assembling the client, you can go 3 ways:

- Downloading the client from the official Mojang server (by default) + adding a modloader, such as Fabric or Quilt
- Using ready-made clients from mirrors
- Manual assembly

The last option for advanced users is described in the article [Building Minecraft game clients](https://blog.aurora-team.ru/posts/building-minecraft-clients/) (the information is a little outdated).

## Download client

::: code-group

```cmd [Command for downloading]
downloadclient <version> <client name> <?source type>
```

```cmd [Vanilla]
downloadclient 1.19.4 TestClient
```

```cmd [Fabric]
downloadclient 1.19.4 TestClient fabric
```

```cmd [Quilt]
downloadclient 1.19.4 TestClient quilt
```
```cmd [NeoForge]
downloadclient 1.19.4 TestClient neoforge
```
```cmd [Forge]
downloadclient 1.19.4 TestClient forge
```

```cmd [Mirror]
downloadclient 1.19.4 TestClient mirror
```

:::

- `version` - game version or build name from mirror
- `client name` - the name of the folder where the client will be saved
- `source type` - source type (optional), default: `mojang`

::: details Working the mirrors

To download assemblies from a mirror, you must first find its address in the community and post it in this form:

```hjson
{
    mirrors: [
        "https://example1.com/"
        "https://example2.com/"
    ]
}
```

Afterwards, you need to specify the format in which the versions are named. This can be done by simply going to the mirror address and looking at the file names on it. The file name is the `client name` for the command. Accordingly, the `source type` will be `mirror`\
You can look at the mirror architecture [here](../for-developers/mirrors.md).
:::

::: info Information:
To install Forge and NeoForge you will need to install the [Java JDK](https://www.azul.com/downloads/?package=jdk#zulu)
:::

The downloaded client will be placed in the path `gameFiles/clients/Client_Name`. Here you can place all additional files for the game.

## Setting up profile

The profile file is located in the `profiles` folder with the name of the downloaded client.

```json
{
    "configVersion": 0,
    "uuid": "016ed45e-93ba-45d9-972a-7de258ad778c",
    "sortIndex": 0,
    "servers": [
        {
            "hostname": "example.com",
            "title": "Test"
        },
        {
            "ip": "127.0.0.1",
            "port": 25565,
            "title": "Test 2"
        }
    ],
    "javaVersion": 17,
    "version": "1.19.4",
    "clientDir": "Test",
    "assetIndex": "3",
    "libraries": [...],
    "gameJar": "minecraft.jar",
    "mainClass": "net.fabricmc.loader.impl.launch.knot.KnotClient",
    "jvmArgs": [],
    "clientArgs": [],
    "update": ["server.dat"],
    "updateVerify": ["mods/", "config/"],
    "updateExclusions": ["mods/.cache/"],
    "whiteListType": "null"
}
```

##### Description of config settings

- `uuid` - a unique id that can be referenced if needed. Do not change it if you do not understand what it is for
- `sortIndex` - in what order should the profile be in the Launcher
- `ip` - game server address to get the number of online players
- `port` - game server port
- `hostname` - replaces `ip` and `port` with a domain with an SRV record
- `title` - server name in profile list
- `javaVersion` - Java version that will be downloaded for the game
- `version` - game version
- `clientDir` - name of game folder in `gameFiles/clients`
- `assetIndex` - asset version for the game
- `libraries` - list of libraries that are used
- `gameJar` - file name to start the game
- `mainClass` - game start class in `gameJar` file
- `jvmArgs` - game launch arguments. Those that are passed to Java
- `clientArgs` - game launch arguments. Those that are passed to the game
- `update` - Details [here](./guard.md#setting-up-file-and-folder-control)
- `updateVerify` - Details [here](./guard.md#setting-up-file-and-folder-control)
- `updateExclusions` - Details [here](./guard.md#setting-up-file-and-folder-control)
- `whiteListType` - Not implemented

## File synchronization

Synchronization is performed automatically when files are changed. But if necessary, it can be performed using commands:

:::code-group
```cmd [Synchronization all]
syncall
```

```cmd [Synchronization profile]
syncprofiles
```

```cmd [Synchronization gameFiles]
syncclients <?Profile name>
```
:::

## Installing mods

To install mods you need to:
1. Go to the path: `YOUR_LAUNCHSERVER/gameFiles/clients/CLIENT_NAME/`
2. Create a `mods` folder next to `minecraft.jar`
3. Upload the necessary modifications to this folder.
4. Installation is complete!