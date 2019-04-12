<template>
<el-containter>
<el-main>
  <el-col><span class="map">地图：</span>
  <el-select v-model="value" placeholder="请选择地图">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
  <el-col><span class="date">时间：</span>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker></el-col>
     <el-col><el-button type="primary" plain @click.native="getPage()">确认</el-button>
     <el-button>取消</el-button></el-col>
  </el-main>
</el-containter>
</template>

<script>
export default{
  methods: {
    getPage () {
      this.$router.push({path: '/experienceshow'})
    }
  }
}
</script>
<style>
.el-main{
  margin-left: 35%
}
.el-col{
  margin-top: 20px
}
.el-button{
  margin-left: 55px
}
</style>
