# Игровые клиенты

При сборке клиента можно пойти 3-мя путями:

- Скачивание клиента с официального сервера Mojang (по умолчанию) + дополнение модлоадером, например Fabric или Quilt
- Использование готовых клиентов с зеркал
- Сборка вручную

Последний вариант для продвинутых пользователей, описан в статье [Сборка игровых клиентов Minecraft](https://blog.aurora-team.ru/posts/building-minecraft-clients/) (информация немного устарела).

## Скачивание клиента
::: code-group
```sh [Шаблон]
downloadclient <version> <client name> <?source type>
```
```sh [Vanilla]
downloadclient 1.12.2 TestClient
```
```sh [Fabric]
downloadclient 1.12.2 TestClient fabric
```
```sh [Quilt]
downloadclient 1.12.2 TestClient quilt
```
```sh [Mirror]
downloadclient 1.12.2 TestClient mirror
```
:::
где:

- `version` - версия клиента или название сборки с зеркала
- `client name` - название папки, в которую будет сохранён клиент
- `source type` - тип источника (необязательно), возможные варианты: `mojang` (используется по умолчанию), `fabric`, `quilt`, `mirror`

## Синхронизация игровых клиентов

```sh
syncclients
```

- Применяет изменения в директории `gameFiles\clients\Имя_профиля`

## Синхронизация профиля

```sh
syncprofiles
```

- Применяет изменения во игровых профилях лаунчера

## Синхронизация

```sh
syncall
```

- Выполнение двух команд сверку вместе

