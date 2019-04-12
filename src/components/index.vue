<template>
<div>
<el-menu :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#fff"
  text-color="#000"
  active-text-color="#4dd0e1"
  router>
  <el-menu-item index="/"><img src="../assets/icon.jpg"/></el-menu-item>
  <el-menu-item index="home">首页</el-menu-item>
  <el-submenu index="2">
  <template slot="title">数据管理</template>
    <el-menu-item index="trackshow">轨迹复现</el-menu-item>
    <el-menu-item index="2-2">室外</el-menu-item>
  </el-submenu>
  <el-menu-item index="trackforecast">终点预测</el-menu-item>
  <el-submenu index="4">
    <template slot="title">数据排行</template>
    <el-menu-item index="experienceshow">经验值排行</el-menu-item>
    <el-menu-item index="interestshow">兴趣度排行</el-menu-item>
  </el-submenu>
</el-menu>
<router-view></router-view>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(this)
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.item{
  margin-left: 20px
  }
</style>
