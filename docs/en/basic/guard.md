# Setting up security

This describes how to set up security systems in the Launcher.

## Setting up file and folder control

To ensure the safety of the build on the player side, you must know the folders and files that are sensitive to changes.
There are 2 checks:
- During startup, the Launcher always downloads some files from the launcher server.
- The Launcher monitors some files that should not change during the game.

Let's take a closer look at the profile configuration.
```json
{
    "update": ["server.dat"],
    "updateVerify": ["mods/", "config/"],
    "updateExclusions": ["mods/.cache/"],
}
```
##### Description of settings

- `update` - implements the first check
- `updateVerify` - implements the first and second check
- `updateExclusions` - sets exceptions for checks

The variables are arrays of file path strings. A `/` at the end of the path denotes a folder.