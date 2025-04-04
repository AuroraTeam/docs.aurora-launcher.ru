# Начало работы

Проект разнесён на два репозитория:

- [AuroraLauncher](https://github.com/AuroraTeam/AuroraLauncher) - Launcher Server, который осуществляет раздачу игровых файлов, отвечает за подключение службы аутентификации и др.

- [Launcher](https://github.com/AuroraTeam/Launcher) - Сам лаунчер, через который будет осуществляться запуск игры.

Настройка этих двух частей происходит отдельно друг от друга, так что начнём с Launcher Server части проекта.

## Установка и настройка

После того, как вы скачали [Launcher Server](https://github.com/AuroraTeam/AuroraLauncher/releases), расположите его в любой папке и запустите его.
Запустить можно таким способом:

::: code-group

```cmd [Linux]
chmod +x ./LauncherServer-linux // Если нет прав на выполнение
./LauncherServer-linux
```

```cmd [Windows]
LauncherServer-win.exe
```

```cmd [MacOS]
chmod +x ./LauncherServer-macos // Если нет прав на выполнение
./LauncherServer-macos
```

:::
::: details Примечание для MacOS

Если в MacOS после выполнения команды `chmod +x ./LauncherServer-macos` вы получите ошибку `permission denied`, то выполните команду `xattr -dr com.apple.quarantine ./LauncherServer-macos`

:::


##### Аргументы запуска Launcher Server

- `--host` - указывается адрес для прослушивания
- `--port` - указывается порт для прослушивания

Сервер создаст конфигурационный файл и после чего выключится.
После чего вы можете произвести его настройку.
Все настройки хранятся в файле `LauncherServerConfig.hjson`.
Ниже будет представлен его пример с описанием всех настроек.

```hjson [LauncherServerConfig.hjson]
{
    configVersion: 0
    projectID: 00000000-0000-0000-0000-000000000000
    projectName: "Example Project"
    lang: ru
    branch: stable
    env: dev
    mirrors: []
    auth:
    {
        type: accept
    }
    skin:
    {
        skinUrl: http://example.com/skin/{uuid}
        capeUrl: http://example.com/cape/{uuid}
    }
    api:
    {
        host: 0.0.0.0
        port: 1370
        useSSL: false
        ssl:
        {
            cert: /path/to/cert.pem
            key: /path/to/key.pem
        }
        disableListing: false
        hideListing: false
    }
}

```

##### Описание настроек конфига

`configVersion` - версия формата текущего конфига, на данный момент не используется\
`projectID` - уникальный ID проекта, генерируется при первом запуске и используется в некоторых местах в коде Launcher/Launcher Server\
`projectName` - Имя проекта\
`lang` - язык, используемый для вывода информации в Launcher Server. Возможные на данный момент варианты `ru` и `en` для русского и английского языков соответственно\
`env` - режим работы Launcher Server. Возможные варианты: `prod`, `debug` и `dev`. На данный момент не используется\
`mirrors` - список зеркал, для скачивания файлов игры. Для получения подробной информации смотрите раздел [Загрузка клиентов](clients.md)\
`auth` - блок настроек методов авторизации, подробнее в разделе [Настройка авторизации](auth.md)\
`skin` - блок настроек метода получения скинов, подробнее в разделе [Настройка системы скинов](system-skin.md)\
`api` - блок настроек подключения к Launcher Server. Содержит следующие настройки:

- `host` - внутренний IP, с которого Launcher Server будет слушать запросы. Не трогать, если не знаете что это и как работает
- `port` - порт, который будет слушать Launcher Server. Аналогично предыдущему пункту
- `disableListing` - Отключить отдачу папок и файлов силами Launcher Server, рекомендуется включить при проксирования файлов, например через [Nginx](nginx.md)
- `hideListing` - Отключить вывод списка папок и файлов, не работает если `disableListing` установлен в значении `true`
- `useSSL` - Использовать SSL сертификат для сервера. При использовании сертификата не забудьте поменять в `address` url с `ws` на `wss`
- `ssl` - пути для используемых файлов сертификата в PEM формате. Можно указывать как абсолютный так и относительный (из директории в которой был запущен Launcher Server) путь до файлов. Подробнее о параметрах [cert и key](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options)

Для работы с защищённым подключением с использованием SSL сертификата рекомендуется вместо настройки `ssl` в Launcher Server использовать проксирование сервера через [Nginx](nginx.md). Данный подход позволяет более удобно настраивать подключение (например с использованием автоматизированных скриптов certbot-a), а также переложить часть нагрузки с Node.js сервера на [Nginx](nginx.md).
