# Настройка системы скинов

```hjson
skin:
    {
        skinUrl: http://localhost:8123/storage/skin?uuid={uuid}
        capeUrl: http://localhost:8123/storage/cape?uuid={uuid}
    }
```

##### Описание настроек
- `skinUrl` - URL до файла со скином
- `capeUrl` - URL до файла со плаща

##### Описание заполнителей

- `{uuid}` - Хранит uuid пользователя
- `{username}` - Хранит никнейм пользователя