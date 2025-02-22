# Getting started work

The project is divided into two repositories:

- [AuroraLauncher](https://github.com/AuroraTeam/AuroraLauncher) - Launcher Server, which distributes game files, is responsible for connecting the authentication service, etc.

- [Launcher](https://github.com/AuroraTeam/Launcher) - The client launcher through which the game will be launched.

The setup of these two parts is done separately from each other, so let's start with the Launcher Server.

## Install and setting

After you have downloaded [LauncherServer](https://github.com/AuroraTeam/AuroraLauncher/releases), place it in any folder and run it.
You can run it this way:

::: code-group

```cmd [Linux]
chmod +x ./LauncherServer-linux
./LauncherServer-linux
```

```cmd [Windows]
LauncherServer-win.exe
```

```cmd [MacOS]
chmod +x ./LauncherServer-macos
./LauncherServer-macos
```

:::
::: details Note for MacOS

If on MacOS you get a `permission denied` error after running `chmod +x ./LauncherServer-macos`, then run `xattr -dr com.apple.quarantine ./LauncherServer-macos`

:::


##### Arguments run LaunchServer

- `--host` - the listening address is specified
- `--port` - the port to listen on is specified

The server will create a configuration file and then shut down.
After that, you can configure it.
All settings are stored in the `LauncherServerConfig.hjson` file.
Below is an example with a description of all the settings.

```hjson
{
    configVersion: 0
    projectID: 00000000-0000-0000-0000-000000000000
    projectName: "Example Project"
    lang: en
    branch: stable
    env: dev
    mirrors: []
    auth:
    {
        type: accept
    }
    skin:
    {
        skinUrl: http://example.com/skin/{uuid}
        capeUrl: http://example.com/cape/{uuid}
    }
    api:
    {
        host: 0.0.0.0
        port: 1370
        useSSL: false
        ssl:
        {
            cert: /path/to/cert.pem
            key: /path/to/key.pem
        }
        disableListing: false
        hideListing: false
    }
}

```

##### Description of config settings

`configVersion` - version of the current config format, currently not used\
`projectID` - unique project ID, generated on first launch and used in some places in the Launcher/Launcher Server code\
`projectName` - project name\
`lang` - language used to display information in the Launcher Server. The currently possible options are `ru` and `en` for Russian and English, respectively\
`env` - Launcher Server mode. Possible options are `prod`, `debug` and `dev`. Currently not used\
`mirrors` - list of mirrors for downloading game files. For more information, see the section [Downloading clients](clients.md)\
`auth` - authorization method settings block, more details in the section [Auth settings](auth.md)\
`skin` - block of settings for the method of obtaining skins, more details in the section [Setting up the skin system](system-skin.md)\
`api` - block of settings for connecting to the Launcher Server. Contains the following settings:
- `host` - internal IP from which the Launcher Server will listen for requests. Do not touch if you do not know what it is and how it works
- `port` - port that the Launcher Server will listen to. Similar to the previous point
- `disableListing` - disable the distribution of folders and files by the Launcher Server, it is recommended to enable when proxying files, for example through [Nginx](nginx.md)
- `hideListing` - disable listing of folders and files, does not work if `disableListing` is set to `true`
- `useSSL` - use SSL certificate for the server. When using the certificate, do not forget to change the `address` url from `ws` to `wss` in the Launcher
- `ssl` - paths for the used certificate files in PEM format. You can specify both absolute and relative (from the directory in which the Launcher Server was started) path to the files. More about the [cert and key](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options) parameters

To work with a secure connection using an SSL certificate, it is recommended to use server proxying via [Nginx](nginx.md) instead of configuring `ssl` in the Launcher Server. This approach allows you to more conveniently configure the connection (for example, using automated certbot scripts), and also shift part of the load from the Node.js server to [Nginx](nginx.md).
