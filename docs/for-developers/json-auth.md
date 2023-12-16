# Запросы для реализации авторизации JSON

Здесь описаны запросы которые вы должны реализовать на вашем сервисе для успешной авторизации в лаунчере.

## `POST` /auth

Запрос:
```json
{
    "username": "Имя пользователя",
    "password": "Пароль пользователя"
}
```

Ответ:
```json
{
    "username": "Имя пользователя",
    "userUUID": "UUID пользователя",
    "accessToken": "accessToken пользователя"
}
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
{
"boolean"
}
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
    "skinUrl": "URL адресс до файла скина",
    "capeUrl": "URL адресс до файла плаща"
}
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
    "userUUID": "UUID пользователя",
    "skinUrl": "URL адресс до файла скина",
    "capeUrl": "URL адресс до файла плаща"
}
```

## `POST` /profiles  //Я чёто не понял код запросса

Запрос:
```json
{

}
```

Ответ:
```json
{

}
```