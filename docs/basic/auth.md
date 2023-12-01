# Настройка авторизации

В данный момент в лаунчере реализована 4 типа авторизации:

- `accept` - Применяет любое имя пользователя и игнорирует ввод пароля
- `reject` - Игнорирует любую авторизацию в лаунчере
- `json` - Подключение к внешней API для авторизации
- `db` - Подключение к базе данных. Подерживается: `MySQL`

Для переключения между режимами измените болок `auth` в конфигурации.

## Настройка типа Accept
```hjson
auth:
    {
        type: accept
    }
```
::: warning Важно:
Имейте виду что все данные которые вы водите для авторизации хранятся в оперативной памяти. После перезапуска LaunserServer данные о пользователях будут стёрты!!!
:::

## Настройка типа Reject
```hjson
auth:
    {
        type: reject
    }
```
:::info Для уточнения:
Чаще всего этот тип используют в техничиских челях. Этот тип не должен использоватся в поспояном использовании.
:::

## Настройка типа Json
```hjson
auth:
    {
        authUrl: http://example.com/auth
        joinUrl: http://example.com/join
        hasJoinedUrl: http://example.com/hasJoin
        profileUrl: http://example.com/profile
        privilegesUrl: http://example.com/privileges
        profilesUrl: http://example.com/profiles
        type: json
        
    }
```
::: info Для уточнения:
Для того чтобы данный тип авторизации работал вы должны реализовать [данные запросы](#) в своём API.
:::

## Настройка типа DB
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
        };
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
        };
        type: db
    }
```