# Запросы для реализации авторизации JSON

Здесь описаны запросы которые вы должны реализовать на вашем сервисе для успешной авторизации в лаунчере.

Ответы на запросы должны придерживаться следующего формата:

```json
// Успешный запрос
{
  "success": true,
  "result": ...
}
// гдe, result - тело ответа

// Ошибка
{
  "success": false,
  "error": "Сообщение об ошибке"
}
```

Пример реализации запросов: [easy-cabinet-backend](https://github.com/AuroraTeam/easy-cabinet-backend/tree/master/src/aurora)

## `POST` /auth

Запрос:

```json
{
  "login": "Имя пользователя",
  "password": "Пароль пользователя"
}
```

Ответ:

```json
{
  "username": "Имя пользователя",
  "userUUID": "UUID пользователя",
  "accessToken": "accessToken пользователя",
  "isAlex": false, // Тонкий скин или нет
  "skinUrl": "URL адрес до файла скина",
  "capeUrl": "URL адрес до файла плаща"
}
// Поля isAlex, skinUrl, capeUrl - опциональные
```

## `POST` /join

Запрос:

```json
{
  "accessToken": "accessToken пользователя",
  "userUUID": "UUID пользователя",
  "serverID": "serverID пользователя"
}
```

Ответ:

```json
boolean // true - успешная авторизация
```

## `POST` /hasJoined

Запрос:

```json
{
  "username": "Имя пользователя",
  "serverID": "serverID пользователя"
}
```

Ответ:

```json
{
  "userUUID": "UUID пользователя",
  "isAlex": false, // Тонкий скин или нет
  "skinUrl": "URL адрес до файла скина",
  "capeUrl": "URL адрес до файла плаща"
}
// Поля isAlex, skinUrl, capeUrl - опциональные
```

## `POST` /profile

Запрос:

```json
{
  "userUUID": "UUID пользователя"
}
```

Ответ:

```json
{
  "username": "Имя пользователя",
  "isAlex": false, // Тонкий скин или нет
  "skinUrl": "URL адрес до файла скина",
  "capeUrl": "URL адрес до файла плаща"
}
// Поля isAlex, skinUrl, capeUrl - опциональные
```

## `POST` /profiles

Запрос:

```json
{
  "usernames": ["Имя пользователя 1", "Имя пользователя 2", ...]
}
```

Ответ:

```json
[
  {
    "id": "UUID пользователя",
    "name": "Имя пользователя"
  },
  ...
]
```
