---
pageClass: about-page
description: '刘子安的个人主页'
avatar: /profile.jpg
head: '刘子安'
info: 'a USTCer'
interests: '喜欢睡觉、摸鱼打游戏'
socials:
- title: github
  link: https://github.com/an-stu
- title: email
  link: 'mailto:liuzian@mail.ustc.edu.cn'
actions:
- text: 项目
  link: /projects/
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

平常会打各种游戏，看看番，也会玩phigros ~~虽然很菜~~
- [bilibili主页](https://space.bilibili.com/526132913):dizzy:

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>