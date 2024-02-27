# Привязка Minecraft сервера

Привязать к Aurora Launcher можно любой сервер Minecraft. Для этого нам понадобится [ServerWrapper](https://github.com/AuroraTeam/ServerWrapper/releases).  
Скачайте исполняемый файл под вашу операционную систему и положите его возле вашего Minecraft сервера. Запустите ServerWrapper, он создаст конфигурационный файл, после чего выключится.  
После настройки конфига можно отказаться от скриптов запуска и просто запускать ServerWrapper.

:::warning Важно:
Обязательно перед привязкой запустите сервер хотя бы 1 раз!  
После привязки сервера не забудьте вернуть в `server.properties` настройку `online-mode=true`
:::

```json
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
- `apiUrl`- URL до вашего лаунчера
