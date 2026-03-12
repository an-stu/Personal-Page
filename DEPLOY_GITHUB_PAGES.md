# GitHub Pages 部署说明

## 1. 推送仓库

将项目推送到 GitHub 仓库（`main` 或 `master` 分支）。

## 2. 开启 Pages

进入仓库 `Settings` -> `Pages`：

- `Source` 选择 `GitHub Actions`

## 3. 等待自动部署

本仓库已内置工作流：`.github/workflows/deploy-pages.yml`。
每次推送会自动构建并发布站点。

## 4. 访问地址

- 普通仓库：`https://<你的用户名>.github.io/<仓库名>/`
- 用户主页仓库（`<用户名>.github.io`）：`https://<你的用户名>.github.io/`
