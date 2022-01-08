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

<!-- ## About Me

I attended [Hogwarts School of Witchcraft and Wizardry](https://en.wikipedia.org/wiki/Hogwarts) to study witchcraft, supervised by **Dumbledore** and other professors. 

I'm trying my best to battle with Lord Voldemort, the evil Wizard that we all fear. My research area includes Defence Against the Dark Arts and other magic. :dizzy:
 -->


## 教育经历

- 2020.09~  就读于中国科学技术大学少年班学院 物理专业
- 2018.09~2020.07 江西省吉水中学

## 工作
  [-> 查看全部](/projects/)

<ProjectCard image="/projects/BilibiliScrapy.png" hideBorder=true>

**BilibiliScrapy**[[Github](https://github.com/an-stu/BilibiliScrapy)]

基于python的requests的简单爬虫

可以爬取对应的flv视频以及相应的ass弹幕文件

</ProjectCard>

## 学习资料
[C++ Primer plus 中文版](/~liuzian/books/C++PrimerPlus\.pdf)


<!-- 
[→ Full list](/projects/) -->

<!-- <ProjectCard image="/projects/1.png" hideBorder=true>

  **The Making of Harry Potter's Wand**

  Harry P., Hermione G., *et al*
  
  Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.
  
  [[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard>

<ProjectCard hideBorder=true>

  **Harry Potter and the Deathly Hallows**
  
  In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

  [[Link](https://www.google.com)]

</ProjectCard> -->


<!-- ## Awards & Honors -->




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
