# Настройка Nginx

Подробно как установить Nginx описано на [официальном сайте](https://nginx.org/ru/linux_packages.html).  
Для настройки вам также понадобиться домен и доступ к нему. Вам нужно будет создать `A` запись, вида `launcher.ВАШ_ДОМЕН.ru`.  
Вам нужно будет скопировать конфигурацию описанную ниже по пути `/etc/nginx/conf.d/launcher.ВАШ_ДОМЕН.conf`.
При отсутствии доменного имени настроить файл необходимо немного иначе, конфигурация прилагается.
::: code-group

```nginx [http]
upstream ws-launcher {
    server 127.0.0.1:1370;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}
server {
    listen 80;
    server_name launcher.ВАШ_ДОМЕН;
    charset utf-8;
    #access_log  /var/log/nginx/launcher.ВАШ_ДОМЕН.access.log;
    #error_log  /var/log/nginx/launcher.ВАШ_ДОМЕН.error.log notice;


    location /files {
        alias ПУТЬ/ДО/ПАПКИ/gameFiles;
        autoindex on;
    }
    location / {
        proxy_pass http://ws-launcher;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

```nginx [https]
upstream ws-launcher {
    server 127.0.0.1:1370;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}
server {
    listen 443 ssl;
    server_name launcher.ВАШ_ДОМЕН;
    ssl_certificate /etc/nginx/ssl/ВАШ_СЕРТИФИКАТ;
    ssl_certificate_key /etc/nginx/ssl/КЛЮЧ_ОТ_СЕРТИФИКАТА;
    #access_log  /var/log/nginx/launcher.ВАШ_ДОМЕН.access.log;
    #error_log  /var/log/nginx/launcher.ВАШ_ДОМЕН.error.log notice;


    location /files {
        alias ПУТЬ/ДО/ПАПКИ/gameFiles;
        autoindex on;
    }
    location / {
        proxy_pass http://ws-launcher;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
```nginx [Без домена]
upstream ws-launcher {
    server 127.0.0.1:1370;
}
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}
server {
    listen 80 default_server;

    charset utf-8;
    #access_log  /var/log/nginx/access.log;
    #error_log  /var/log/nginx/error.log notice;


    location /files {
        alias ПУТЬ/ДО/ПАПКИ/gameFiles;
        autoindex on;
    }
    location / {
        proxy_pass http://ws-launcher;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
:::
