---
pageClass: about-page
description: 刘子安的个人主页
avatar: /profile.jpg
head: 刘子安
info: USTC 本科生 / Physics + Coding
interests: 游戏、动漫、节奏游戏（Phigros）
socials:
- title: github
  link: https://github.com/an-stu
- title: email
  link: mailto:liuzian@mail.ustc.edu.cn
actions:
- text: 查看项目
  link: /projects/
- text: 学习资料
  link: /downloads/
---

<AboutCard :frontmatter="$page.frontmatter" >

平时会把课程作业和兴趣项目整理成可复用的仓库，重点关注实用性和可维护性。

- [Bilibili 主页](https://space.bilibili.com/526132913)

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background linear-gradient(160deg, #eaf2ff 0%, #f6fbff 55%, #ffffff 100%)
  min-height calc(100vh)

  .last-updated
    display none

</style>
