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
        sizes: "180x180",
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
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "guide/" },
      {
        text: "更新日志",
        link: "https://github.com/gavin-gong/ChatGavin/releases",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/gavin-gong/ChatGavin",
      },
    ],
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
