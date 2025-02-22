import { defineConfig } from 'vitepress';
import { navbar as nRu } from "./navbar/ru";
import { navbar as nEn } from "./navbar/en";
import { sidebar as sRu } from "./sidebar/ru";
import { sidebar as sEn } from './sidebar/en';
import lightbox from "vitepress-plugin-lightbox"

export default defineConfig ({
  lang: "ru-RU",
  title: "Aurora Launcher",
  description:
    "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
  cleanUrls: true, 
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
        href: "/favicons/icon.svg",
      },
    ],
    ["link", { rel: "manifest", href: "/favicons/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#0080ff" }],
  ],
  sitemap: {
    hostname: "https://docs.aurora-launcher.ru/",
  },
  lastUpdated: true,
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
    image: {
      lazyLoading: true,
    },
  },
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
      link: "/ru/",
      themeConfig: {
        nav: nRu,
        sidebar: sRu,
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
        editLink: {
          text: "Редактировать страницу",
          pattern: "https://github.com/AuroraTeam/docs.aurora-launcher.ru/edit/dev/docs/:path",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: nEn,
        sidebar: sEn,
      },
    }
  },
  themeConfig: {
    logo: "/logo.svg",
    outline: [2, 3],
    socialLinks: [
      {
        icon: "youtube",
        link: "https://www.youtube.com/@AuroraTeamRu",
      },
      {
        icon: "discord",
        link: "https://discord.aurora-launcher.ru",
      },
      {
        icon: "github",
        link: "https://github.com/AuroraTeam/AuroraLauncher",
      },
      {
        icon: "telegram",
        link: "https://t.me/aurora_team_tg",
      },
    ],
    editLink: {
      pattern: "https://github.com/AuroraTeam/docs.aurora-launcher.ru/edit/dev/docs/:path",
    },
    search: {
      provider: "local",
      options: {
        detailedView: true,
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: "Поиск",
              },
              modal: {
                displayDetails: "Детальный просмотр",
                resetButtonTitle: "Сбросить поиск",
                noResultsText: "Не найдено",
                footer: {
                  selectText: "Выбор",
                  navigateText: "Навигация",
                  closeText: "Закрыть",
                },
              },
            },
          },
        },
      },
    },
  },
});
