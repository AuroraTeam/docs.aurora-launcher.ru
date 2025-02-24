# Requests for JSON authorization

Here are the requests that you must implement on your service for successful authorization in the launcher.

Responses to requests must adhere to the following format:

```json
// Successful request
{
  "success": true,
  "result": ...
}
// where, result is the response body

// Error
{
  "success": false,
  "error": "Error message"
}
```

Example of query implementation: [easy-cabinet-backend](https://github.com/AuroraTeam/EasyCabinet/tree/master/packages/backend/src/aurora)

## `POST` /auth

Request:

```json
{
  "login": "Username",
  "password": "Password"
}
```

Answer:

```json
{
  "username": "Username",
  "userUUID": "UUID",
  "accessToken": "accessToken"
}
```

## `POST` /join

Request:

```json
{
  "accessToken": "accessToken",
  "userUUID": "UUID",
  "serverID": "serverID"
}
```

Answer:

```json
boolean // true - successful authorization
```

## `POST` /hasJoined

Request:

```json
{
  "username": "Username",
  "serverID": "serverID"
}
```

Answer:

```json
{
  "userUUID": "UUID"
}
```

## `POST` /profile

Request:

```json
{
  "userUUID": "UUID"
}
```

Answer:

```json
{
  "username": "Username"
}
```

## `POST` /profiles

Request:

```json
{
  "usernames": ["Username 1", "Username 2", ...]
}
```

Answer:

```json
[
  {
    "id": "UUID",
    "name": "Username"
  },
  ...
]
```
