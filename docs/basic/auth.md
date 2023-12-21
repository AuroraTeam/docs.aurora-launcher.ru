# Настройка аутентификации

В данный момент в лаунчере реализованы 4 типа аутентификации:

- `accept` - Применяет любое имя пользователя и игнорирует ввод пароля
- `reject` - Игнорирует любую аутентификацию в лаунчере
- `json` - Подключение к внешней API для аутентификации
- `db` - Подключение к базе данных. Поддерживается: `MySQL`, `MariaDB`.

Для переключения между режимами измените блок `auth` в конфигурации.

## Настройка типа `Accept`

```hjson
auth:
  {
    type: accept
  }
```

::: info Для уточнения:
Данный метод хранит данные аутентификации, в оперативной памяти и предназначен в основном для тестирования либо использования на закрытых серверах "для друзей".
:::

## Настройка типа `Reject`

```hjson
auth:
  {
    type: reject
  }
```

:::info Для уточнения:
Чаще всего этот тип используют в технических целях. Например для временного запрета входа в лаунчер, на время технических работ.
:::

## Настройка типа `Json`

```hjson
auth:
  {
    authUrl: http://example.com/auth
    joinUrl: http://example.com/join
    hasJoinedUrl: http://example.com/hasJoin
    profileUrl: http://example.com/profile
    profilesUrl: http://example.com/profiles
    type: json
  }
```

::: info Для уточнения:
Для того, что бы данный тип аутентификации работал, вы должны реализовать [следующие запросы](/docs/for-developers/json-auth.md) в своём API.
:::

## Настройка типа `DB`

```hjson
auth:
    {
        connection: {
            type: mysql
            host: 127.0.0.1
            port: 3306
            user: userlauncher
            password: password
            database: mc
        }
        properties: {
            tableName: users
            uuidColumn: uuid
            usernameColumn: username
            passwordColumn: password
            accessTokenColumn: accessToken
            serverIdColumn: serverID
            skinUrlColumn: skinURL
            capeUrlColumn: capeURL
            onlineChatColumn: onlineChat
            multiplayerServerColumn: multiplayerServer
            multiplayerRealmsColumn: multiplayerRealms
            telemetryColumn: telemetry
        }
        type: db
    }
```

::: warning Важно:
В нынешней реализации шифрование паролей ещё не реализовано. Пароли хранятся в незашифрованном виде!!!
:::
