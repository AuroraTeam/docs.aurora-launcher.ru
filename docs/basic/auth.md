# Настройка аутентификации

В данный момент в лаунчере реализованы 4 типа аутентификации:

- `accept` - Применяет любое имя пользователя и игнорирует ввод пароля
- `reject` - Игнорирует любую аутентификацию в лаунчере
- `json` - Подключение к внешней API для аутентификации
- `db` - Подключение к базе данных. Поддерживается: `MySQL`, `MariaDB`, `PostgreSQL`, `SQLite`, `Oracle Database`, `Microsoft SQL Server`.

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
    type: json
    authUrl: http://example.com/auth
    joinUrl: http://example.com/join
    hasJoinedUrl: http://example.com/hasJoined
    profileUrl: http://example.com/profile
    profilesUrl: http://example.com/profiles
  }
```

::: info Для уточнения:
Для того, что бы данный тип аутентификации работал, вы должны реализовать [следующие запросы](/for-developers/json-auth.md) в своём API.
:::

## Настройка типа `DB`

```hjson
auth:
    {
        type: db
        passwordVerfier: bcrypt
        passwordSalt: random
        connection: {
            type: mysql
            host: 127.0.0.1
            port: 3306
            username: userlauncher
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
        }
    }
// Поле passwordVerfier имеет возможность принять: `hash`, `bcrypt`, `argon2`
// Поле passwordSalt - опциональное
```

Для работы этого способа авторизации вам нужно создать вручную все нужные таблицы а базе данных. Вот SQL запрос для создание нужных таблиц.

```sql
-- Создаём таблицу с пользователями
CREATE TABLE `users` (
  `id` SMALLINT(6) NOT NULL AUTO_INCREMENT,
	`username` CHAR(30) NOT NULL,
	`password` CHAR(64) NOT NULL,
	`uuid` CHAR(36) NULL,
	`accessToken` CHAR(36) NULL,
	`serverID` VARCHAR(41) NULL,
	`skinURL` TEXT NULL,
	`capeURL` TEXT NULL,
	UNIQUE INDEX `id` (`id`) USING BTREE
)
COLLATE='utf8mb4_general_ci' ENGINE=InnoDB;

-- Создаём триггер на генерацию UUID для новых пользователей
DELIMITER //
CREATE TRIGGER setUUID BEFORE INSERT ON users
FOR EACH ROW BEGIN
IF NEW.uuid IS NULL THEN
SET NEW.uuid = UUID();
END IF;
END; //
DELIMITER ;

-- Генерирует UUID для уже существующих пользователей
UPDATE users SET uuid=(SELECT UUID()) WHERE uuid IS NULL;
```


