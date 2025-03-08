# General information

:::warning
This section in the development
:::

API for communication between the Launcher and the Launcher Server, released via the [Aurora RPC](https://rpc.aurora-team.ru) library.\
Information about the library and the protocol used can be found [here](https://rpc.aurora-team.ru/guide/introduction.html).

Below are the API methods available for use in the launcher.

## Auth

To work with the API on behalf of the launcher, you need to pass auth. To do this, you need to send an `auth` request with the following content:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "method": "auth",
  "params": {
    "login": "login123",
    "password": "password456"
  }
}
```

The response is returned in the following format:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "result": {
    "login": "login123",
    "userUUID": "00000000-0000-0000-0000-000000000000",
    "accessToken": "00000000-0000-0000-0000-000000000000"
  }
}
```

When using RejectProvider you get a standard ResponseError:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "error": {
    "code": 200,
    "message": "Auth rejected"
  }
}
```

The returned message can be overridden in the Launcher Server config.
