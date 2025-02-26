# Привязка Minecraft сервера

Привязать к Aurora Launcher можно любой сервер Minecraft. Для этого нам понадобится [ServerWrapper](https://github.com/AuroraTeam/ServerWrapper/releases).  
Скачайте исполняемый файл под вашу операционную систему и положите его возле вашего Minecraft сервера. Запустите ServerWrapper, он создаст конфигурационный файл, после чего выключится.

:::warning Важно:
Обязательно перед привязкой запустите сервер хотя бы 1 раз!  
После привязки сервера не забудьте вернуть в `server.properties` настройку `online-mode=true`
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

##### Описание настроек конфига

- `javaExecutablePath`- путь к Java
- `additionalFlags`- флаги настройки Java процесса
- `arguments`- дополнительные аргументы для сервера
- `injectorFilename` - название файла authlib injector-а. Не меняйте если не понимаете что это
- `serverFilename`- название файла сервера
- `apiUrl`- URL до вашего лаунчсервера

После настройки конфига, сервер можно запустить следующей командой:

::: code-group
```cmd [Linux]
chmod +x ./sw_linux // Если нет прав на выполнение
./sw_linux
```

```cmd [Windows]
sw_windows.exe
```

```cmd [MacOS]
./sw_macos
```
:::

## Использование аргументов запуска

Если по каким-то причинам вам не подходит выше описанный способ можно выполнить все действия в ручную.
Скачиваем последнею версию [authlib-injector](https://github.com/yushijinhun/authlib-injector/releases) и кладём в папку с сервером. Затем открываете ваш скрипт запуска сервера и сразу после команды `java` добавляете `-javaagent:{название файла инжектора}={адрес до лаунчсервера}`. По итогу должно получится что-то в таком виде:

```cmd
java -javaagent:authlib-injector-1.2.5.jar=http://127.0.0.1:1370 -Xms2G -Xmx4G -jar paper.jar nogui
```
