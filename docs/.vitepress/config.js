import { navbar as nav } from "./navbar";
import { sidebar } from "./sidebar";

export default {
  lang: "ru-RU",
  title: "Aurora Launcher",
  description:
    "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/favicons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "any",
        href: "/favicons/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicons/favicon.svg",
      },
    ],
    ["link", { rel: "manifest", href: "/favicons/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#0080ff" }],
  ],
  sitemap: {
    hostname: "https://docs.aurora-launcher.ru/",
  },
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav,
    sidebar,
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.aurora-launcher.ru",
      },
      {
        icon: "github",
        link: "https://github.com/AuroraTeam/AuroraLauncher",
      },
    ],
    outlineTitle: "На этой странице",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    lastUpdated: {
      text: "Последнее обновление",
    },
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Наверх",
    search: {
      provider: "local",
    },
  },
};
