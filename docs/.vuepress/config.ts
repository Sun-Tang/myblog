/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path';
import { defineConfig4CustomTheme } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
import dayjs from 'dayjs';
import baiduCode from './config/baiduCode'; // 百度统计hm码
import htmlModules from './config/htmlModules'; // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  // theme: 'vdoing', // 使用npm包主题
  theme: resolve(__dirname, '../../vdoing'), // 使用本地主题
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Sun's blog",
      description:
        'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。'
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    bodyBgImg: [
      '/img/0-1.jpg',
      '/img/0-2.jpg',
      '/img/0-3.jpg',
      '/img/0-4.png',
      '/img/0-5.jpg',
      '/img/0-6.jpg'
    ],
    bodyBgImgOpacity: 0.7,
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
          { text: 'CSS', link: '/pages/c8f128/' },
          { text: 'JavaScript基础', link: '/pages/a61298/' },
          { text: 'JavaScript高级', link: '/pages/8e00a6/' },
          { text: 'Git', link: '/pages/c59a02/' },
          { text: 'Webpack', link: '/pages/e061fc/' },
          { text: 'Vite', link: '/pages/27231d/' },
          { text: 'Vue', link: '/pages/0bc939/' },
          { text: 'React', link: '/pages/606eee/' },
          {
            text: 'Node',
            items: [
              { text: 'Node基础', link: '/pages/7f7c99/' },
              { text: 'Nest', link: '/pages/e358b4/' }
            ]
          }
        ]
      },
      {
        text: 'Flutter',
        link: '/flutter/',
        items: [
          {
            text: 'Flutter基础',
            items: [
              { text: '00.Dart环境搭建', link: '/pages/32fb4b/' },
              {
                text: '01.Dart入口注释变量常量命名规则',
                link: '/pages/9d340f/'
              },
              {
                text: '02.Dart的数据类型详解int double String bool List Maps',
                link: '/pages/19a641/'
              },
              {
                text: '03.Dart运算符 条件表达式 Dart类型转换',
                link: '/pages/d03edd/'
              },
              {
                text: '04.Dart循环语句 for while do while  break continue多维列表循环',
                link: '/pages/333c50/'
              },
              {
                text: '05.Dart 集合类型List Set Map详解 以及循环语句 forEach map where any every',
                link: '/pages/19c3c5/'
              }
            ]
          }
        ]
      },
      {
        text: 'go语言',
        link: '/go/',
        items: [
          {
            text: 'Go基础',
            items: [{ text: 'Go语言基础', link: '/pages/ffc323/' }]
          }
        ]
      },
      {
        text: '数据库',
        link: '/database/',
        items: [
          {
            text: 'mongodb',
            items: [
              { text: 'mongodb', link: '/pages/98d592/' },
              { text: 'mongoose', link: '/pages/82dfd8/' }
            ]
          },
          {
            text: 'mysql',
            items: [
              { text: 'mysql', link: '/pages/efc1f4/' },
              { text: 'sequelize', link: '/pages/35e430/' }
            ]
          },
          {
            text: 'redis',
            items: [{ text: 'redis', link: '/pages/13e6c5/' }]
          }
        ]
      },
      {
        text: '运维',
        link: '/linux/',
        items: [
          { text: 'Linux', link: '/pages/879eda/' },
          { text: 'Nginx', link: '/pages/404fa4/' }
        ]
      },
      {
        text: '资源',
        link: '/resources/',
        items: [
          {
            text: '学习方法',
            items: [
              { text: '费曼学习法', link: '/pages/f2a556/' },
              { text: '笔记方法', link: '/pages/e60c81/' },
              { text: '提高学习效率的策略', link: '/pages/a8692ab3bdcb4588/' },
              { text: '提高记忆的技巧', link: '/pages/996822b2a2ca6e3b/' }
            ]
          },
          {
            text: '前端常用',
            items: [
              { text: '常用网站', link: '/pages/beb6c0bd8a66cea6/' },
              { text: '常用的前端轮子', link: '/pages/47cf96/' },
              { text: '面试问题', link: '/pages/aea6571b7a8bae86/' },
              { text: 'Markdown', link: '/pages/ad247c4332211551/' }
            ]
          },
          {
            text: '友情链接',
            items: [{ text: '友情链接', link: '/friends/' }]
          }
        ]
      },
      {
        text: '外语',
        link: '/language/',
        items: [
          { text: '日语', link: '/pages/cb3967/' },
          {
            text: '英语',
            items: [
              { text: '国际音标', link: '/pages/1809c4/' },
              { text: '新概念第一册', link: '/pages/318215/' }
            ]
          }
        ]
      },
      {
        text: '前端项目',
        link: '/webProduct/',
        items: [
          {
            text: '小滴课堂',
            items: [
              { text: '后端项目', link: '/pages/7c4a4d/' },
              { text: '前端项目', link: '/pages/33547c/' },
              { text: '后台管理', link: '/pages/49f9fd/' },
              { text: 'Nuxt的基础使用', link: '/pages/2cc55b/' },
              { text: 'Linux安装环境', link: '/pages/efcb67/' },
              { text: 'Node基础', link: '/pages/5012f0/' }
            ]
          }
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'Sun-Tang', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Sun', // 必需
      link: 'https://github.com/Sun-Tang' // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/logo.png',
      name: 'Sun Tang',
      slogan: '何以解忧，唯有不断学习变强，强大才可以无惧一切！'
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:3826287@qq.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Sun-Tang'
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173'
        }
      ]
    },

    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo:
        'Sun Tang | <a href="https://github.com/Sun-Tang" target="_blank">MIT License</a>' // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'
      }
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }] // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],

  // 插件配置
  plugins: {
    // 导入本地插件（供学习参考）
    // [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // },

    // 百度自动推送
    'vuepress-plugin-baidu-autopush': {},

    // 百度统计
    'vuepress-plugin-baidu-tongji': {
      hm: baiduCode
    },

    // 全文搜索
    'fulltext-search': {},

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    // 'thirdparty-search': {
    //   thirdparty: [
    //     {
    //       title: '在MDN中搜索',
    //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
    //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在Runoob中搜索',
    //       frontUrl: 'https://www.runoob.com/?s=',
    //     },
    //     {
    //       title: '在Vue API中搜索',
    //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q=',
    //     },
    //     {
    //       title: '通过百度搜索本站的',
    //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
    //     },
    //   ],
    // },

    // 代码块复制按钮
    'one-click-copy': {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    },

    // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
    'demo-block': {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    },

    // 放大图片
    'vuepress-plugin-zooming': {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      }
    },

    // 评论区
    // 'vuepress-plugin-comment': {
    //   choosen: 'gitalk',
    //   options: {
    //     clientID: 'a6e1355287947096b88b',
    //     clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //     repo: 'blog-gitalk-comment', // GitHub 仓库
    //     owner: 'xugaoyi', // GitHub仓库所有者
    //     admin: ['xugaoyi'], // 对仓库有写权限的人
    //     // distractionFreeMode: true,
    //     pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //     id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //     title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //     labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //     body:
    //       '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //   },
    // },

    // "上次更新"的时间格式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
      }
    }
  },

  markdown: {
    lineNumbers: true
  },

  // 监听文件变化并重新构建
  extraWatchFiles: ['.vuepress/config.ts', '.vuepress/config/htmlModules.ts']
});
