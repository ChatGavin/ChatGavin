export default {
  title: "ChatGavin",
  description: "Chat withGavin",
  head: [
    ["link", { rel: "icon", href: "/img/logo/vitepress.svg" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/img/logo/vitepress.svg",
        sizes: "180x180",
      },
    ],
    [
      "meta",
      {
        name: "algolia-site-verification",
        content: "73ADFC284EB44532",
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
      { text: "AI 技术", link: "/ai-tech/mcp" },
    ],
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
    search: {
      provider: "algolia",
      options: {
        appId: "W4Q74322DY",
        apiKey: "eedf20ae715174b06c4b63657804d053",
        indexName: "gavin_chat_w4q74322dy_pages",
      },
    },
    sidebar: {
      "/web/": [
        {
          text: "Github",
          link: "/web/github",
        },
        {
          text: "Vitepress",
          link: "/web/vitepress",
        },
      ],
      "/ai-tech/": [
        {
          text: "MCP",
          link: "/ai-tech/mcp",
        },
      ],
    },
  },
};
