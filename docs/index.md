---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Deku 的花园广场"
  text: "A VitePress Site"
  tagline: 👏来到我的花园,花园的花朵真鲜艳
  image: 
   src: /assets/WechatIMG6.png
  actions:
    - theme: brand
      text: 进入花园
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - icon: 🤔
    title: 好好活着吧
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Vite
    icon: V
    details: 下一代前端构建工具
    link: /Tech/front-basic/tools/vite
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<!--自定义组件--->
<script setup>
  import Home from '.vitepress/components/Home/index.vue';
</script>
<Home />

---

lastUpdated: true

---