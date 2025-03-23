export default {
  title: "ChatGavin",
  description: "Chat withGavin",
  head: [
    ["link", { rel: "icon", href: "img/logo/vitepress.svg" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "img/logo/vitepress.svg",
      },
    ],
  ],
  themeConfig: {
    logo: "img/logo/vitepress.svg",
    lastUpdated: true,
    lastUpdatedText: "最后更新于",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [{ text: "首页", link: "/" }],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ChatGavin",
      },
    ],
    // 页脚配置
    footer: {
      message: "Released under the Apache-2.0 License",
      copyright: "Copyright © 2025-present Gavin Lin",
    },
    outlineTitle: "目录",
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          link: "/guide/",
        },
      ],
    },
    algolia: {
      appId: "",
      apiKey: "",
      indexName: "chatgavin",
    },
  },
};
