# Setting up Nginx

Detailed instructions on how to install Nginx are described on the [official website](https://nginx.org/ru/linux_packages.html).
To set it up, you will also need a domain and access to it. You will need to create an `A` record, like `launcher.YOUR_DOMAIN.ru`.
You will need to copy the configuration described below to the path `/etc/nginx/conf.d/launcher.YOUR_DOMAIN.conf`.
If there is no domain name, the file must be configured slightly differently; the configuration is attached.
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
    server_name launcher.YOUR_DOMAIN;
    charset utf-8;
    #access_log  /var/log/nginx/launcher.YOUR_DOMAIN.access.log;
    #error_log  /var/log/nginx/launcher.YOUR_DOMAIN.error.log notice;
    client_max_body_size 300M;


    location /files {
        alias PATCH/TO/FOLDER/gameFiles;
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
    server_name launcher.YOUR_DOMAIN;
    charset utf-8;
    ssl_certificate /etc/nginx/ssl/YOUR_CERTIFICATE;
    ssl_certificate_key /etc/nginx/ssl/CERTIFICATE_KEY;
    #access_log  /var/log/nginx/launcher.YOUR_DOMAIN.access.log;
    #error_log  /var/log/nginx/launcher.YOUR_DOMAIN.error.log notice;
    client_max_body_size 300M;


    location /files {
        alias PATCH/TO/FOLDER/gameFiles;
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
    client_max_body_size 300M;


    location /files {
        alias PATCH/TO/FOLDER/gameFiles;
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
