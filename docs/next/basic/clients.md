# Игровые клиенты

При сборке клиента можно пойти 2-мя путями:

- Сборка вручную
- Использование готовых клиентов с зеркал

Первый вариант для продвинутых пользователей, описан в статье [Сборка игровых клиентов Minecraft](https://blog.aurora-team.ru/posts/building-minecraft-clients/).  
Описание второго вы увидите ниже.

## Скачивание ассетов

Команда: `downloadassets <version> <folder name> <?source type>`

где:

- `version` - версия ассетов
- `folder name` - название папки, в которую будут сохранены ассеты
- `source type` - тип источника (необязательно), возможные варианты: `mojang` (используется по умолчанию), `mirror`

Примеры использования:  
`downloadassets 1.12.2 assets1.12.2` - скачать ассеты с официального сервера Mojang  
`downloadassets 1.12.2 assets1.12.2 mirror` - найти и скачать ассеты с зеркал, указаных в конфиге

## Скачивание клиента

Команда: `downloadclient <version> <folder name> <?source type>`

где:

- `version` - версия ассетов
- `folder name` - название папки, в которую будет сохранён клиент
- `source type` - тип источника (необязательно), возможные варианты: `mojang` (используется по умолчанию), `fabric`, `mirror`

Примеры использования:  
`downloadclient 1.12.2 TestClient` - скачать клиент с официального сервера Mojang  
`downloadclient 1.12.2 TestClient fabric` - скачать клиент с официального сервера Mojang + Fabric  
`downloadclient 1.12.2 TestClient mirror` - найти и скачать клиент с зеркал, указаных в конфиге
