<template>
  <el-container >
      <el-header>
          <header-nav></header-nav>
      </el-header>
    </el-container>
</template>
<script>
import index from './components/index.vue'
export default{
  components: {
    headerNav: index
  }
}
</script>
<style>
</style>
