# Общая информация

:::warning
Данный раздел в процессе обновления
:::

API для общения лаунчера с лаунчер-сервером реализован посредством клиент-серверного подключения через [WebSocket](https://developer.mozilla.org/ru/docs/Web/API/WebSocket).  
Обмен данными осуществляется в формате JSON, используя технологию [RPC](https://ru.wikipedia.org/wiki/Удалённый_вызов_процедур).  
Протокол обмена данных основан на спецификации JSON-RPC 2.0.

Примеры типизации request/response на ЯП Typescript:

```ts
interface Request {
  id?: number | string;
  method: string;
  params: object | array;
}

interface Response {
  id: number | string;
  result: object | array;
}
```

При возврате ошибки используется следующий тип:

```ts
interface ResponseError {
  id: number | string;
  error: {
    code: number;
    message: string;
  };
}
```

## Аутентификация

Для работы с API от лица лаунчера требуется пройти аутентификацию. Для этого нужно отправить запрос типа `auth` со следующим содержимым:

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

Ответ возвращается в следующем формате:

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

При использовании RejectProvider вы получаете стандартный ResponseError:

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "error": {
    "code": 200,
    "message": "Auth rejected"
  }
}
```

Возвращаемое сообщение можно переопределить в конфиге лаунчер-сервера.
