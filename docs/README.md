---
pageClass: home-page
# some data for the components
name: 刘子安
profile: /profile.jpg

socials:
  - title: github
    icon: "/~liuzian/home/icons/github.svg"
    link: https://github.com/an-stu

bio: Student at USTC
email: liuzian@mail.ustc.edu.cn
qq: qq:1290254857
---

<ProfileSection :frontmatter="$page.frontmatter" />


## 教育经历

- 2020.09~  就读于中国科学技术大学少年班学院 物理专业
- 2018.09~2020.07 就读于江西省吉水中学

## 工作
  [-> 查看全部](/projects/)

<ProjectCard image="/projects/BilibiliScrapy.png" hideBorder=true>

**BilibiliScrapy**[[Github](https://github.com/an-stu/BilibiliScrapy)]

基于python的requests的简单爬虫

可以爬取对应的flv视频以及相应的ass弹幕文件

</ProjectCard>

## 学习资料

[->下载](/downloads/)



<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
