module.exports = {
    base: '/',
    title: 'Peinkid--风逝冰蓠',
    description: 'Peinkid Blog',
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale('zh-cn')
                    return moment(timestamp).format('YYYY-MM-DD HH:mm')
                }
            }
        ], '@vuepress/back-to-top'
    ],
    head: [
        ['script', {
            src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.4.1/jquery.min.js'
        }],
        ['link', {
            rel: 'shortcut icon',
            type: "image/x-icon",
            href: '/favicon.ico'
        }],
        ["link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"
        }],
        ["link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/gh/peinkid/peinkid.github.io@v0.5/live2d/css/live2d.css"
        }],
    ],
    themeConfig: {
        smoothScroll: true,
        logo: 'https://cdn.jsdelivr.net/gh/peinkid/peinkid.github.io@v0.1/eye.png',
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/peinkid/peinkid.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '个人创作',
                link: '/all/blog/blog1.md'
            },
            {
                text: '技术博客',
                link: '/all/tech/tech1.md'
            },
            {
                text: '每日习题',
                link: '/all/exc/exc1.md'
            },
            {
                text: '关于Peinkid',
                link: '/all/about/about.md'
            }
        ],
        sidebar: {
            '/all/blog/': [
                'blog1',
                'blog2',
                'blog3',
                'blog4',
                'blog5',
                'blog6'
            ],
            '/all/tech/': [
                'tech1',
                'tech2',
                'tech3',
                'tech4'
            ],
            '/all/exc/': [
                'exc1'
            ]
        },
        lastUpdated: '最后更新时间',
    }
}