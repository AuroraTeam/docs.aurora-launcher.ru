# Список кодов ошибок

`100` - **Ошибка парсинга запроса**  
Скорее всего вы передали не валидный запрос на лаунчсервер

`101` - **UUID запроса не определен / Тип запроса не определен**  
Скорее всего вы не передали UUID или тип запроса

`102` - **Неизвестный тип запроса**  
Тип запроса который вы пытаетесь отправить не существует

`103` - **primaryProvider не определен**  
Не указан primaryProvider, либо указан не валидный

`200` - **Авторизация отклонена**  
Авторизация отклонена лаунчер-сервером (При использовании RejectAuthProvider)
