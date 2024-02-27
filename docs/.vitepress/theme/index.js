import DefaultTheme from "vitepress/theme";
import "./custom.css";

import { yandexMetrika } from "@hywax/vitepress-yandex-metrika";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    yandexMetrika(ctx, {
      counter: { id: 68187730 },
    });
  },
};
