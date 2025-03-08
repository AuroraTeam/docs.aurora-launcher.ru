# Binding Minecraft server

You can bind any Minecraft server to Launcher Server. For this, we will need [ServerWrapper](https://github.com/AuroraTeam/ServerWrapper/releases).\
Download the executable file for your operating system and place it near your Minecraft server. Run ServerWrapper, it will create a configuration file, and then turn off.

:::warning Warning:
Be sure to start the server at least once before binding!
After binding the server, do not forget to return the setting `online-mode=true` in `server.properties`
:::

```json [sw_config.json]
{
  "javaExecutablePath": "java",
  "additionalFlags": "-Xms2048M -Xmx4096M",
  "arguments": "--nogui",
  "injectorFilename": "injector.jar",
  "serverFilename": "server.jar",
  "apiUrl": "http://127.0.0.1:1370"
}
```

##### Description of config settings

- `javaExecutablePath` - path to Java
- `additionalFlags` - Java process configuration flags
- `arguments` - additional arguments for the server
- `injectorFilename` - file name authlib injector. Don't change it if you don't understand what it is
- `serverFilename` - server file name
- `apiUrl` - URL to your Launcher Server

After setting up the config, the server can be started with the following command:

::: code-group
```cmd [Linux]
chmod +x ./sw_linux // If there are no rights to execute
./sw_linux
```

```cmd [Windows]
sw_windows.exe
```

```cmd [MacOS]
./sw_macos
```
:::

## Using start arguments
If for some reason the method described above does not suit you, you can perform all actions manually.
Download the latest version of [authlib-injector](https://github.com/yushijinhun/authlib-injector/releases) and put it in the server folder. Then open your server launch script and immediately after the `java` command add `-javaagent:{file name injector}={URL to the Launcher Server}`. The result should look something like this:

```cmd
java -javaagent:authlib-injector-1.2.5.jar=http://127.0.0.1:1370 -Xms2G -Xmx4G -jar paper.jar nogui
```
