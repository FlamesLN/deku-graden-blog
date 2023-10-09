import { defineConfig } from 'vitepress'
import { nav } from './configs/nav'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "deku的碎碎念",
  base: "/deku-graden-blog/",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
          }
        }
      }
    },
    outline: {
      label: '本页目录',
      level: [2, 5]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
