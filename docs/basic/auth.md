# Настройка аутентификации

В данный момент в лаунчере реализованы 4 типа аутентификации:

- `accept` - Принимает любое имя пользователя и игнорирует ввод пароля
- `reject` - Блокирует любую аутентификацию в лаунчере
- `json` - Подключение к внешнему API для аутентификации
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
    message: В данный момент ведутся технические работы, попробуйте позже
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
        passwordVerfier: hash(md5(pass + salt))
        passwordSalt: randomSalt123
        connection: {
            // Возможные типы подключения: mysql, mariadb, postgres, sqlite, oracle и mssql
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
```

Для работы этого способа авторизации вам нужно создать вручную все нужные таблицы а базе данных.\
Вот пример SQL запроса для создание нужных таблиц:

:::code-group

```sql [MySQL]
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
```

```sql [PosgreSQL]
-- Создаём таблицу с пользователями
CREATE TABLE "users" (
	"id" SERIAL NOT NULL,
	"username" CHAR(30) NOT NULL,
	"password" VARCHAR(64) NOT NULL,
	"uuid" CHAR(36) NULL DEFAULT gen_random_uuid(),
	"accessToken" CHAR(36) NULL,
	"serverID" VARCHAR(41) NULL,
	"skinURL" TEXT NULL,
	"capeURL" TEXT NULL
)

```

:::
### Проверка пароля

Настройка поля passwordVerfier отвечает за проверку пароля и принимает следующие значения: `hash`, `bcrypt`, `argon2`.\
Поле passwordSalt - опциональное, используется только в методе `hash`.

Пример использования:

---

#### `bcrypt` и `argon2`

Достаточно просто указать `bcrypt` или `argon2` в поле `passwordVerfier`.\
Например:

```hjson
passwordVerfier: bcrypt
```

---

#### `hash`

Метод `hash` принимает в себя тело функции хеширования. Например у вас используется какая-нибудь старая CMS или ЛК и в нём проверка пароля реализована какой-либо устаревшей функцией хеширования пароля, например такой: `md5(md5(пароль) + соль)`.\
В таком случае Вам нужно указать следующее настройки:

```hjson
passwordVerfier: hash(md5(md5(pass) + salt))
// здесь указывается ваша соль
passwordSalt: exampleSalt123
```

Пример так называемого "двойного md5" будет выглядеть так:

```hjson
passwordVerfier: hash(md5(md5(pass)))
```

В данной схеме `pass` - это пароль, который вводит пользователь, `salt` - это соль, которая указывается в поле `passwordSalt` в настройках.\
Функция `hash` принимает в себя различные варианты хеш-функций, например: `md5`, `sha1`, `sha256`, `sha512` и т.д.
