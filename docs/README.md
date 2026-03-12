---
pageClass: home-page
name: 刘子安
profile: /profile.jpg

socials:
  - title: github
    icon: /icons/github.svg
    link: https://github.com/an-stu

bio: 中国科学技术大学物理专业本科生，关注编程工具与效率实践。
email: liuzian@mail.ustc.edu.cn
qq: qq:1290254857
---

<ProfileSection :frontmatter="$page.frontmatter" />

## 简介

目前主要在学习物理与计算机相关技能，习惯把日常学习过程沉淀为可复用的小工具。

## 教育经历

- 2020.09 - 至今：中国科学技术大学，少年班学院，物理专业
- 2018.09 - 2020.07：江西省吉水中学

## 项目精选

[查看全部项目](/projects/)

<ProjectCard image="/projects/BilibiliScrapy.png" hideBorder=true>

**BilibiliScrapy** [[GitHub](https://github.com/an-stu/BilibiliScrapy)]

基于 Python 的命令行工具，可抓取 B 站视频与 ASS 弹幕文件，适合作为网络请求与脚本工具入门练习。

</ProjectCard>

## 学习资料

[进入下载页](/downloads/)

<style lang="stylus">

.theme-container.home-page .page
  font-size 15px
  font-family "PingFang SC", "Noto Sans SC", "Helvetica Neue", Helvetica, Arial, sans-serif
  background linear-gradient(180deg, #f8fbff 0%, #ffffff 28%)

  p
    margin 0 0 0.7rem

  p, ul, ol
    line-height 1.65

  a
    font-weight 500

  .theme-default-content:not(.custom) > h2
    margin-bottom 0.7rem

  .theme-default-content:not(.custom) > h3
    padding-top 3.4rem

  .profile
    padding 1rem
    border-radius 14px
    background #ffffff
    box-shadow 0 8px 24px rgba(25, 79, 153, 0.08)

  .md-card
    margin-top 0.8em
    border 1px solid #e8edf6
    border-radius 12px

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.55

</style>
