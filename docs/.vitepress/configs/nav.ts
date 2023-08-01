import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    { text: '技术文档', items: [ 
      {
        text: '算法基础',
        link: '/Tech/Algothm/index.html',
      },
      {
        text: '前端基础',
        link: '/Tech/front-basic/index.html'
      }
    ],
 },
 {
    text: '文章',
    link: '/Articles/index.html',
  },
    { text: '生活小记', link: '/markdown-examples' }
  ];