# Настройка системы скинов

Для работы системы скинов необходим сервис который сможет отдавать по никнейму или по uuid файл содержимое которого будет текстура скина или плаща.  
Пример реализации запросов: [api.aurora-launcher](https://api.aurora-launcher.ru/#tag/mojang/GET/mojang/skin)

```hjson
skin:
    {
        skinUrl: http://localhost:8123/storage/skin?uuid={uuid}
        capeUrl: http://localhost:8123/storage/cape?uuid={uuid}
    }
```

##### Описание настроек
- `skinUrl` - URL до файла с скином
- `capeUrl` - URL до файла с плащом

##### Описание заполнителей

- `{uuid}` - хранит uuid пользователя
- `{username}` - хранит никнейм пользователя