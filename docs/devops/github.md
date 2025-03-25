# Github

## Github pages

**Q: 为什么选择 Github Pages**

**A: 简单 快捷 免费**

### gh-pages 部署

- 新建 `.github/workflows/deploy.yml` 文件
- github -> repository -> settings -> pages -> source
  - 选择 `GitHub Actions`
- github -> Actions 查看部署状态

### 自定义域名

- 云服务器域名管理添加域名解析 `CNAME`, 记录值 `user.github.io`
- 根目录新建 `CNAME` 文件, 内容为你的域名
- github -> repository -> settings -> pages -> custom domain
  - 保存域名后, github 会自动验证你的域名, 并申请 TLS 证书, 强制开启 HTTPS
