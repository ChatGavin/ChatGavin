# 版本管理

版本管理是前端工程化中非常重要的一环，它能够帮助团队更好地协作开发，追踪代码变更，以及管理项目版本。

## Git 工作流

### 分支管理策略

我们采用 [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) 作为主要的分支管理策略：

- `master`: 主分支，用于生产环境
- `develop`: 开发分支，用于开发环境
- `feature/*`: 功能分支，用于开发新功能
- `hotfix/*`: 热修复分支，用于修复生产环境的紧急问题
- `release/*`: 发布分支，用于准备新版本发布

### 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范来规范化提交信息：

```bash
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

常用的 type 类型：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构代码
- `test`: 添加测试
- `chore`: 构建过程或辅助工具的变动

## 版本号管理

我们遵循 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/) 规范：

- 主版本号：做了不兼容的 API 修改
- 次版本号：做了向下兼容的功能性新增
- 修订号：做了向下兼容的问题修正

示例：`1.2.3`

- `1`: 主版本号
- `2`: 次版本号
- `3`: 修订号

## 自动化版本管理

### 使用 standard-version

```bash
# 安装
npm install --save-dev standard-version

# 在 package.json 中添加脚本
{
  "scripts": {
    "release": "standard-version"
  }
}
```

### 配置文件

在项目根目录创建 `.versionrc.js`：

```javascript
module.exports = {
  types: [
    { type: "feat", section: "✨ Features | 新功能" },
    { type: "fix", section: "🐛 Bug Fixes | Bug 修复" },
    { type: "docs", section: "📝 Documentation | 文档" },
    { type: "style", section: "💄 Styles | 风格" },
    { type: "refactor", section: "♻️ Code Refactoring | 代码重构" },
    { type: "perf", section: "⚡ Performance Improvements | 性能优化" },
    { type: "test", section: "✅ Tests | 测试" },
    { type: "build", section: "📦‍ Build System | 打包构建" },
    { type: "ci", section: "👷 Continuous Integration | CI 配置" },
    { type: "chore", section: "🚀 Chore | 构建/工程依赖/工具" },
    { type: "revert", section: "⏪ Revert | 回退" },
  ],
};
```

## Git Hooks

使用 husky 和 commitlint 来强制执行提交规范：

```bash
# 安装依赖
npm install --save-dev husky @commitlint/config-conventional @commitlint/cli

# 初始化 husky
npx husky install

# 添加 commit-msg hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

配置 commitlint：

```javascript
// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```
