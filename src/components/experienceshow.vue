<template>
<div>
  <el-row>
    <el-col :span="8">
    <template>
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
    </template>
  </el-col>
    <el-col :span="16">
      <template>
      <el-table
    :data="tableData"
    style="width: 60%"
    max-height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="experienceScore"
      label="经验值">
    </el-table-column>
  </el-table>
  </template>
    </el-col>
  
  </el-row>
</div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小',
        experienceScore: '80'
      }, {
        date: '2016-05-04',
        name: '王虎',
        experienceScore: '85'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        experienceScore: '90'
      }, {
        date: '2016-05-03',
        name: '小虎',
        experienceScore: '87'
      }, {
        date: '2016-05-03',
        name: '小虎',
        experienceScore: '87'
      }, {
        date: '2016-05-03',
        name: '小虎',
        experienceScore: '87'
      }, {
        date: '2016-05-03',
        name: '小虎',
        experienceScore: '87'
      }
      ]
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
</style>
