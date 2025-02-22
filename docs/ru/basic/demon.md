# Запуск лаунчсервера в виде службы

Для обеспечение стабильности работы лаунчсервера его нужно запускать в фоновом режиме.\
В режиме службы вы не сможете отправлять команды на лаунчсервер. Когда вы закончите настройку желательно запустить лаунчсервер именно в этом режиме.

## Запуск через `PM2`

Устанавливаем сам PM2 через npm менеджер:
```sh
npm install pm2 -g
```

После переходим в папку с лаунчсервером и регистрируем файл:
```sh
pm2 start LauncherServer-linux --name launcher
```

Так же включаем автозагрузку и сохраняем список приложений:
```sh
pm2 startup
pm2 save
```

Перечень полезных команд:

- `stop` - останавливаем приложение
- `restart` - перезапускаем приложение
- `delete` - удаляет приложение из списка
- `list` - список приложений и краткая сводка про их состояние
- `monit` - запускает псевдографический интерфейс где подробно описывается состояние приложений
- `logs` - просмотр истории консоли приложений

## Запуск через `systemd`

Создаём файл конфигурации сервиса и при необходимости меняем настройки:
```sh
sudo nano /etc/systemd/system/launcher.service
```
Создаём отдельного юзера для управления лаунчерсервером:
```sh
adduser launchserver --no-create-home --gecos ""
```
Чтобы все работало корректно, вам потребуется выдать юзеру права на папку:
```sh
sudo chown launchserver:launchserver путь до вашей папки с лаунчсервером
```

Само содержимое файла:
```systemd
[Unit]
Description=launcher Server

[Service]
# Укажите путь где у вас размещён лаунчсервер
ExecStart=/home/LauncherServer-linux
Restart=always
RestartSec=10
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=launcher
User=launchserver

[Install]
WantedBy=multi-user.target
```

И после запускаем службу и ставим её в автозагрузку:
```sh
sudo systemctl enable launcher.service
sudo systemctl start launcher
```