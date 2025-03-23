# Vitepress

## algolia 搜索

**Q: 为什么选择 algolia 搜索**

**A: 简单 免费 通用**

### 如何配置

- 项目配置 `docs/.vitepress/config.js`

  - `head/meta` 中配置 `algolia-site-verification`
  - `algolia` 搜索配置, 添加 `appId` 和 `apiKey`

- 注册 algolia 账号
  - 创建应用
  - 获取 `algolia-site-verification`, 并部署到线上进行验证
  - 获取 `appId` 和 `apiKey`, 配置到项目中实现搜索功能
