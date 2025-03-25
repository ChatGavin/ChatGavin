# Vitepress

## algolia 搜索

**Q: 为什么选择 algolia 搜索**

**A: 简单 免费 通用**

### 如何配置

- 新建 `docs/.vitepress/config.js`

  - `head/meta` 中配置 `algolia-site-verification`
  - `algolia` 搜索配置, 添加 `appId` 和 `apiKey`

- 注册 algolia 账号
  - 创建应用
  - 获取 `algolia-site-verification`, 并部署到线上进行验证
  - 获取 `appId` 和 `apiKey`, 配置到项目中实现搜索功能
  - 配置 `indexName`, 用于搜索

### algolia 爬虫配置

**algolia 默认一周爬一次最低一天一次, 通过 github actions 实现定时更新**

- 新建 `docs/.vitepress/algolia.json` 爬虫配置
- 新建 `docs/.github/workflows/algolia.yml` 构建脚本
- 配置 `ALGOLIA_APP_ID` 和 `ALGOLIA_API_KEY` 到 github 仓库
  - 这两个参数以变量的形式存储在 github 仓库中, 目的是为了防止 :warning: Admin API Key 泄露
  - algolia -> account -> settings -> API Keys
    - Application ID 和 :warning: Admin API Key
  - github -> repository -> settings -> secrets and variables -> actions -> new repository secret
    - ALGOLIA_APP_ID 和 ALGOLIA_API_KEY
