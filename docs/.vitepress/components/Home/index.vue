<template>
    <div class="home-title">
        <h2>花园的花朵真鲜艳</h2>
        <div class="content">
          <div class="content-item bgc-shinbashi">
            自定义卡片1
          </div>
          <div class="content-item bgc-kariyasu">
            自定义卡片2
          </div>
          <div class="content-item bgc-karacha">
            自定义卡片3
          </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
  .home-title {
    color: #211E55;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-item {
    width: 400px;
    height: 300px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bgc-shinbashi {
    background-color: #0089A7;
  }
  .bgc-kariyasu {
    background-color: #E9CD4C;
  }
  .bgc-karacha {
    background-color: #B47157;
  }
</style>