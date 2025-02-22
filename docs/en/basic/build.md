# Setting up an update

There are 3 ways to publish new versions of the Launcher:

- `generic` - using the built-in release server in the Launcher Server
- `github` - public repository is created where new versions will be stored in the `Releases` tab. For experienced users
- `s3` - cloud file storage. For advanced users

For convenient compilation of the Launcher on different OS, we use the `GitHub Actions` system.\
After successful build, the assembled Launcher will appear in the Launchserver folder `gameFiles/release`.

## Setting up release uploads

To correctly unload releases, you must already have `public.pem` in the repository and the launchserver address specified in `config.ts`.
The Launcher Server must have an open port to the internet to be able to get binaries from `GitHub Actions`.

## Starting the build

To start the build, go to the `Actions` tab and select `Releases Build` in the list on the left. After that, click the `Run workflow` button by selecting the branch you want to build.
![2.png](/foto-github/2.webp)

Before building, do not forget to increase the version in `package.json`. Otherwise, the built Launcher will not be able to be sent to the Launcher Server.

## Localed build

If you are building the launcher for testing purposes (you don't need a working launcher update system) you can use the `npm run build` command to build the launcher for your system.\
The installation file will be located in the `dist` folder.

If you change your design and you need to see the result of your changes, you can use the command `npm run dev` and you will have access to a quick reload of the markup and browser devtools.