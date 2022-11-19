import { navbar } from "./navbar";
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
    nav: navbar,
    sidebar,
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.aurora-launcher.ru",
      },
      {
        icon: "github",
        link: "https://github.com/AuroraTeam/LauncherServer",
      },
    ],
    outlineTitle: "На этой странице",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
  },
};
