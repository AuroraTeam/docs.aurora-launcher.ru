# Начало работы

Для настройки [Launchera](https://github.com/AuroraTeam/Launcher) понадобиться завести аккаунт GitHub, так как для сборки лаунчера под все операционные системы тредуется компиляция лаунчера в нужной операционке.

## Создание репозилория

Для начала клонируем репозиторий к себе на аккаунт нажав на `Create a new repository` и называем его по душе.
![1.png](/foto-github/1.png)
:::info Для справки:
Если вы не хотите чтобы у вас угнали лаунчер то создавайте Приватный репозиторий.
::::

## Настройка ланучера

Все настройки хранятся в файле `config.ts`.
```ts
export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Aurora Launcher',
};

export const api = {
    ws: 'ws://212.109.221.239:1370/ws',
    web: 'http://212.109.221.239:1370',
};
```

##### Описание настроек конфига

- `width` - ширина окна лаунчера (в пикселях)  
- `height` - длина окна лаунчера (в пикселях)  
- `frame` - должны ли быть ведны рамки окна  
- `resizable` - должно ли менятся размеры окна  
- `maximizable` - может ли окно быть развернуто на весь экран  
- `fullscreenable` - должен ли лаунчер открываться на весь экран  
- `title` - название окна лаунчера  
- `ws` - значение `websocket` в файле `LauncherServerConfig.hjson`  
- `web` - значение `web` в файле `LauncherServerConfig.hjson`  

