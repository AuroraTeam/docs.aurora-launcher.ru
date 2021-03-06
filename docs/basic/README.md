# Начало работы

## Установка и настройка

После того, как вы скачали лаунчер-сервер, расположите его в любой папке и запустите его.
Сервер создаст все нужные для работы папки и файлы.
После чего вы можете выключить сервер и произвести его настройку.
Все настройки хранятся в файле `LauncherServerConfig.json`.
Ниже будет представлен его пример с описанием всех настроек.

```json
{
  "configVersion": 0,
  "projectID": "00000000-0000-0000-0000-000000000000",
  "lang": "ru",
  "env": "dev",
  "mirrors": ["https://example.aurora-launcher.ru/"],
  "auth": {
    "type": "accept"
  },
  "ws": {
    "address": "ws://localhost:1370/",
    "ip": "0.0.0.0",
    "port": 1370,
    "enableListing": true,
    "hideListing": false,
    "useSSL": false,
    "ssl": {
      "cert": "/path/to/cert.pem",
      "key": "/path/to/key.pem"
    }
  }
}
```

##### Описание настроек конфига

`configVersion` - версия формата текущего конфига, на данный момент не используется  
`projectID` - уникальный ID проекта, генерируется при первом запуске и используется в некоторых местах в коде лаунчера/лаунчер-сервера  
`lang` - язык, используемый для вывода информации в лаунчер-сервере. Возможные на данный момент варианты `ru` и `en` для русского и англиского языков соответственно  
`env` - режим работы лаунчер-сервера. Возможные варианты: prod, debug и dev. На данный момент не используется  
`mirrors` - список зеркал, для скачивания файлов игры. Для получения подробной информации смотрите раздел [Загрузка клиентов](clients.md)  
`auth` - блок настроек методов авторизации и получения скинов, подробнее в разделе [Настройка авторизации](#)  
`ws` - блок настроек подключения к лаунчер-серверу. Содержит следующие настройки:

- `address` - Внешний адрес, по которому лаунчер-сервер будет доступен из интернета
- `ip` - внутренный IP, с которого лаунчер-сервер будет слушать запросы. Не трогать, если не знаете что это и как работает
- `port` - порт, который будет слушать лаунчер-сервер. Аналогично предыдущему пункту
- `enableListing` - Включить отдачу папок и файлов силами лаунчер-сервера, рекомендуеся отключать при проксировании файлов, например через Nginx
- `hideListing` - Отключить вывод списка папок и файлов, не работает если `enableListing` установлен в начении `true`
- `useSSL` - Использовать SSL сертификат для сервера. При использовании сертификата не забудьте поменять в `address` url с `ws` на `wss`
- `ssl` - пути для используемых файлов сертификата в PEM формате. Можно указывать как абсолютный так и относительный (из директории в которой был запущен лаунчер-сервер) путь до файлов. Подробнее о параметрах [cert и key](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options)
