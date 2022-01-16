module.exports = {
  lang: "ru",
  title: "Aurora Launcher",
  description:
    "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
  bundler: "@vuepress/bundler-vite",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/favicons/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#2575fc",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/favicons/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#2575fc" }],
    [
      "meta",
      { name: "msapplication-config", content: "/favicons/browserconfig.xml" },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    navbar: [
      {
        text: "Базовая настройка",
        link: "/basic/",
      },
      {
        text: "Для разработчиков",
        link: "/for-developers/",
      },
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
    ],
    sidebar: {
      "/basic/": [
        {
          text: "Базовая настройка",
          children: ["/basic/README.md", "/basic/clients.md"],
        },
      ],
      "/for-developers/": [
        {
          text: "Для разработчиков",
          children: [
            "/for-developers/README.md",
            "/for-developers/mirrors.md",
            "/for-developers/api.md",
            "/for-developers/errors.md",
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-Z4BQX6LZKB",
      },
    ],
  ],
};
