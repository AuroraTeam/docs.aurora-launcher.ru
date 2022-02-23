module.exports.alpha = {
  "/basic/": [
    {
      text: "Базовая настройка",
      children: ["/basic/README.md", "/basic/clients.md"],
    },
  ],
  "/for-developers/api/": [
    {
      text: "Aurora API",
      collapsible: true,
      children: [
        "/for-developers/api/info.md",
        "/for-developers/api/errors.md",
      ],
    },
  ],
  "/for-developers/": [
    {
      text: "Прочее",
      collapsible: true,
      children: ["/for-developers/mirrors.md"],
    },
  ],
};

module.exports.next = {
  "/next/basic/": [
    {
      text: "Базовая настройка",
      children: ["/next/basic/README.md", "/next/basic/clients.md"],
    },
  ],
  "/next/for-developers/api/": [
    {
      text: "Aurora API",
      collapsible: true,
      children: [
        "/next/for-developers/api/info.md",
        "/next/for-developers/api/errors.md",
      ],
    },
  ],
  "/next/for-developers/": [
    {
      text: "Прочее",
      collapsible: true,
      children: ["/next/for-developers/mirrors.md"],
    },
  ],
};
