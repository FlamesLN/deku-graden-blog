import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
    '/Tech/front-basic/': [
        {
          text: '构建工具',
          items: [
            {
                text: 'Webpack',
                link: '/Tech/front-basic/tools/webpack.html'
            },
            {
                text: 'Vite',
                link: '/Tech//front-basic/tools/vite.html'
            }
          ]
        },
        {
            text: '可视化方案',
            items: [
                {
                    text: 'Echarts',
                },
                {
                    text: 'Three.js'
                }
            ]
        }
    ]
};