export const sidebar = {
  "/basic/": [
    {
      text: "Словарь определений",
      link: "/basic/dictionary",
    },
    {
      text: "Настройка LauncherServer",
      items: [
        {
          text: "Начало работы",
          link: "/basic/install-launch-server",
        },
        {
          text: "Игровые клиенты",
          link: "/basic/clients",
        },
        {
          text: "Настройка авторизации",
          link: "/basic/auth",
        },
        {
          text: "Настройка системы скинов",
          link: "/basic/system-skin",
        },
        {
          text: "Привязка Minecraft сервера",
          link: "/basic/server",
        },
      ],
    },
    {
      text: "Настройка Launcher",
      items: [
        {
          text: "Начало работы",
          link: "/basic/install-launch",
        },
        {
          text: "Настройка Discord активности",
          link: "/basic/discord-rpc",
        },
        {
          text: "Настройка сборки",
          link: "/basic/build",
        },
      ],
    },
    {
      text: "Дополнительная настройка",
      items: [
        {
          text: "Подпись лаунчера",
          link: "/basic/signing",
        },
        {
          text: "Настройка Nginx",
          link: "/basic/nginx",
        },
        {
          text: "Установка Forge",
          link: "/basic/forge",
        },
      ],
    },
  ],
  "/for-developers/api/": [
    {
      text: "Aurora API",
      items: [
        {
          text: "Общая информация",
          link: "/for-developers/api/info",
        },
        {
          text: "Список кодов ошибок",
          link: "/for-developers/api/errors",
        },
      ],
    },
  ],
  "/for-developers/": [
    {
      text: "Прочее",
      items: [
        {
          text: "Альтернативные зеркала",
          link: "/for-developers/mirrors",
        },
        {
          text: "Запросы для JSON авторизации",
          link: "/for-developers/json-auth",
        },
      ],
    },
  ],
};
