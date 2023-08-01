import { defineConfig } from 'vitepress'
import { nav } from './configs/nav'
import { sidebar } from './configs/sideBar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-deku/blog/',
  title: "Deku Garden Ground",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/WechatIMG6.png',
    nav,
    sidebar: sidebar,
    search: {
      provider: 'local',
      options: {
        translations: {
         button: {
          buttonText: '搜索'
         }
        }
      }
    },
    outline: {
      label: '本页目录',
      level: [2, 5],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
