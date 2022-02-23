const _default = [
  {
    text: "На главный сайт",
    link: "https://aurora-launcher.ru",
  },
  {
    text: "Discord",
    link: "https://discord.aurora-launcher.ru",
  },
  {
    text: "GitHub",
    link: "https://github.com/AuroraTeam/LauncherServer",
  },
];

module.exports.alpha = [
  {
    text: "Базовая настройка",
    link: "/basic/",
  },
  {
    text: "Для разработчиков",
    children: [
      {
        text: "Aurora API",
        children: [
          "/for-developers/api/info.md",
          "/for-developers/api/errors.md",
        ],
      },
      {
        text: "Прочее",
        children: ["/for-developers/mirrors.md"],
      },
    ],
  },
  ..._default,
];

module.exports.next = [
  {
    text: "Базовая настройка",
    link: "/next/basic/",
  },
  { 
    text: "Для разработчиков",
    children: [
      {
        text: "Aurora API",
        children: [
          "/next/for-developers/api/info.md",
          "/next/for-developers/api/errors.md",
        ],
      },
      {
        text: "Прочее",
        children: ["/next/for-developers/mirrors.md"],
      },
    ],
  },
  ..._default,
];
