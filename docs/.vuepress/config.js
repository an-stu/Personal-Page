const repoName = (process.env.GITHUB_REPOSITORY || "").split("/")[1] || "";
const base =
  process.env.BASE_PATH ||
  (repoName ? `/${repoName}/` : "/");

module.exports = {
  title: "个人主页",
  description: "刘子安的个人主页",
  head: [["link", { rel: "icon", href: `/profile.jpg` }]],
  base,
  dest: "./home/",

  themeConfig: {
    search: false,
    nav: [
      { text: "主页", link: "/" },
      { text: "关于", link: "/about/" },
      { text: "项目", link: "/projects/" },
      // { text: "Guide", link: "/guide/" },
      { text: "下载", link: "/downloads/"},
      { text: "GitHub", link: "https://github.com/an-stu" }
    ],
    lastUpdated: '最近更新时间',
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
