# Игровые клиенты

При сборке клиента можно пойти 3-мя путями:

- Скачивание клиента с официального сервера Mojang (по умолчанию) + дополнение модлоадером, например Fabric или Quilt
- Использование готовых клиентов с зеркал
- Сборка вручную

Последний вариант для продвинутых пользователей, описан в статье [Сборка игровых клиентов Minecraft](https://blog.aurora-team.ru/posts/building-minecraft-clients/) (информация немного устарела).

## Скачивание клиента

::: code-group

```sh [Команда для скачивания]
downloadclient <version> <client name> <?source type>
```

```sh [Vanilla]
downloadclient 1.19.4 TestClient
```

```sh [Fabric]
downloadclient 1.19.4 TestClient fabric
```

```sh [Quilt]
downloadclient 1.19.4 TestClient quilt
```

```sh [Mirror]
downloadclient 1.19.4 TestClient mirror
```

:::
где:

- `version` - версия игры или название сборки с зеркала
- `client name` - название папки, в которую будет сохранён клиент
- `source type` - тип источника (необязательно), возможные варианты: `mojang` (используется по умолчанию), `fabric`, `quilt`, `mirror`

Скачанный клиент будет размещён по пути `gameFiles\clients\Имя_Клиента`. Здесь вы можете размещать все дополнительные файлы для игры.

## Настройка профиля

После [скачивания клиента](#скачивание-клиента) нужно настроить профиль выбора версии. Конфигурационный файл находится в папке `profiles` с именем скачанового клиента.

```json
{
    "configVersion": 0,
    "uuid": "016ed45e-93ba-45d9-972a-7de258ad778c",
    "sortIndex": 0,
    "servers": [
        {
            "ip": "127.0.0.1",
            "port": 25565,
            "title": "Test"
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
    "update": [],
    "updateVerify": [],
    "updateExclusions": [],
    "whiteListType": "null"
}
```

##### Описание настроек конфига

- `uuid` - уникальный id на который можно ссылаться при необходимости. Не меняйте его если не понимаете для чего он нужен
- `sortIndex` - в какой очерёдности должен стоять профиль в лаунчере
- `ip` - адрес игрового сервера для получения числа игроков онлайн
- `port` - порт игрового сервера
- `title` - название сервера в списке профилей
- `javaVersion` - версия Java которая будет скачиваться для игры
- `version` - версия игры
- `clientDir` - название игровой папки в `gameFiles\clients`
- `assetIndex` - версия asset для игры
- `libraries` - список библиотек которые используются
- `gameJar` - название файла для старта игры
- `mainClass` - класс старта игры в файле `gameJar`
- `jvmArgs` - аргументы запуска игры. Те которые начинаются на `-`
- `clientArgs` - аргументы запуска игры. Те которые передаются в игру
- `update` - Не реализованно
- `updateVerify` - Не реализованно
- `updateExclusions` - Не реализованно
- `whiteListType` - Не реализованно

## Синхронизация файлов

После каких либо изменений в папках `profiles` и `gameFiles` нужно выполнить синхронизацию.

:::code-group

```sh [синхронизация всего]
syncall
```

```sh [синхронизация профилей]
syncprofiles
```

```sh [синхронизация игровых файлов]
syncclients
```

:::
