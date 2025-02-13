import DefaultTheme from "vitepress/theme";
import "./custom.css";
import Layout from "./Layout.vue";

import { yandexMetrika } from "@hywax/vitepress-yandex-metrika";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    yandexMetrika(ctx, {
      counter: { id: 68187730 },
    });
  },
};
