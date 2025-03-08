# Alternative mirrors

When creating your mirror, you need to adhere to the following structure:

```
root
 ┣ clients
 ┃ ┣ 1.12.2.zip
 ┃ ┣ 1.16.5.zip
 ┃ ...
 ┣ libraries
 ┃ ┣ 1.12.2.zip
 ┃ ┣ 1.16.5.zip
 ┃ ...
 ┗ profiles
   ┣ 1.12.2.json
   ┣ 1.16.5.json
   ...
```

- `clients` - folder with client archives in `zip` format.
- `libraries` - folder with library archives in `zip` format.
- `profiles` - folder with profile files in `json` format.

::: info Recommendation
It is recommended to start building the client using the Launcher Server. This way you will make fewer mistakes.
:::

Archives from the `clients` folder contain files and folders that will be located next to the `minecraft.jar` file.
Archives from the `libraries` folder contain a hierarchy of folders that will be located in the folder of the same name.
Files from the `profiles` folder have a standard game profile for the launcher in terms of structure.

Finding the profile file is required to start downloading, but finding libraries or additional client files is not required.
That is, the profile does not necessarily have to have an archive with libraries or an archive with the client.

When users download the client, the archive name is the client name.
That is, when downloading the client with the `downloadclient` command, for example `downloadclient 1.20.2-fabric TestClient mirror`, the `1.20.2-fabric.zip` archives and the `1.20.2-fabric.json` profile will be downloaded.

The names of the assemblies can be anything, at your discretion. But for convenience, it is recommended to follow the format `<game version>-<assembly name>`. And if possible, do not contain spaces, and also be unique.

You can also safely put any files nearby, for example, server assemblies, additional configs, Java installers, etc. But not in the `clients, libraries, profiles` folders themselves
