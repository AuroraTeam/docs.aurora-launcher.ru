# Setting up auth

Currently, the Launcher implements 4 types of authentication:

- `accept` - accepts any username and ignores password input
- `reject` - blocks any authentication in the Launcher
- `json` - connecting to an external API for authentication
- `db` - connect to a database. Supported: `MySQL`, `MariaDB`, `PostgreSQL`, `SQLite`, `Oracle Database`, `Microsoft SQL Server`.

To switch between modes, change the `auth` block in the conf.

## Setting up the `Accept` type

```hjson
auth:
  {
    type: accept
  }
```

::: info To clarify:
This method stores authentication data in RAM and is intended primarily for testing or use on closed "friends" servers.
:::

## Setting up the `Reject` type

```hjson
auth:
  {
    type: reject
    message: Maintenance is currently underway. Please try again later.
  }
```

:::info To clarify:
Most often, this type is used for technical purposes. For example, to temporarily block access to the launcher during maintenance.
:::

## Setting up the `Json` type

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

::: info To clarify:
In order for this type of authentication to work, you must implement [the following requests](../for-developers/json-auth.md) in your API.
:::

## Setting up the `DB` type

```hjson
auth:
    {
        type: db
        passwordVerfier: hash(md5(pass + salt))
        passwordSalt: randomSalt123
        connection: {
            // Possible connection types: mysql, mariadb, postgres, sqlite, oracle and mssql
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

For this authorization method to work, you need to manually create all the necessary tables in the database.\
Here is an example of a SQL query to create the necessary tables:

:::code-group

```sql [MySQL]
-- Create a table with users
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

-- Create a trigger to generate UUID for new users
DELIMITER //
CREATE TRIGGER setUUID BEFORE INSERT ON users
FOR EACH ROW BEGIN
IF NEW.uuid IS NULL THEN
SET NEW.uuid = UUID();
END IF;
END; //
DELIMITER ;
```

```sql [PostgreSQL]
-- Create a table with users
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
### Check password

The passwordVerfier field setting is responsible for password verification and accepts the following values: `hash`, `bcrypt`, `argon2`.\
The passwordSalt field is optional and is used only in the `hash` method.

Example of use:

---

#### `bcrypt` and `argon2`

It is enough to simply specify `bcrypt` or `argon2` in the `passwordVerfier` field.\
For example:

```hjson
passwordVerfier: bcrypt
```

---

#### `hash`

The `hash` method accepts the body of the hashing function. For example, you are using some old CMS or personal account and the password check is implemented in it by some outdated password hashing function, for example this one: `md5(md5(pass) + salt)`.
In this case, you need to specify the following settings:

```hjson
passwordVerfier: hash(md5(md5(pass) + salt))
// your salt is indicated here
passwordSalt: exampleSalt123
```

An example of a so-called "double md5" would look like this:

```hjson
passwordVerfier: hash(md5(md5(pass)))
```

In this scheme, `pass` is the password entered by the user, `salt` is the salt specified in the `passwordSalt` field in the settings.\
The `hash` function accepts various hash function options, such as: `md5`, `sha1`, `sha256`, `sha512`, etc.