import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页', link: '/'
    },
    {
        text: '技术学习',
        items: [
            {
                text: '前端基础知识',
                link: '/',
            },
            {
                text: '可视化解决方案',
                link: '/',
            },
            {
                text: '框架使用',
                link: '/',
            }
        ]
    },
    {
        text: '成长笔记',
        items: [
            {
                text: '书籍推荐',
                link: '/',
            },
        ],
    },
    {
        text: '韭菜日记',
        link: '/content/financialManagement/index'
    },
    {
        text: '随心谈',
        link: '',
    }
];