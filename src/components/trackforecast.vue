<template>
<div>
<el-row>
<el-col :span="16"><div id="container" style="width:780px; height:400px"></div></el-col>
<el-col :span="7"><div><el-table
    ref="singleTable"
    :data="tableData"
    border
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width:400px"
    height="400px">
    <el-table-column
      prop="tracknumber"
      label="轨迹编号"
     
      >
    </el-table-column>
  </el-table></div></el-col>
</el-row>
<el-col :offset="15">
    <el-button type="primary" plain @click.native="addforecastMarker()">预测终点</el-button>
    <el-button type="primary" plain @click.native="addtrueMarker()">实际终点</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
</el-col>
</div>
</template>
<script>
import AMap from 'AMap'
var map
export default {
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      map = new AMap.Map('container', {
        center: [116.31805, 39.959836],
        resizeEnable: true,
        zoom: 14,
        mapStyle: 'amap://styles/macaron'
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })
    },
    addforecastMarker () {
      var forecastmarker = new AMap.Marker({
        position: new AMap.LngLat(116.31805, 39.959836)
      })
      map.add(forecastmarker)
    },
    addtrueMarker () {
      var truemarker = new AMap.Marker({
        position: new AMap.LngLat(116.31805, 39.959837),
        icon: '//vdata.amap.com/icons/b18/1/2.png'
      })
      map.add(truemarker)
    },
    setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row)
      }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小',
        tracknumber: '001'
      }, {
        date: '2016-05-04',
        name: '王虎',
        tracknumber: '002'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        tracknumber: '003'
      }, {
        date: '2016-05-03',
        name: '小虎',
        tracknumber: '004'
      }, {
        date: '2016-05-03',
        name: '小虎',
        tracknumber: '005'
      }, {
        date: '2016-05-03',
        name: '小虎',
        tracknumber: '006'
      }, {
        date: '2016-05-03',
        name: '小虎',
        tracknumber: '007'
      }
      ],
      currentRow: null
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

  }
}
</script>
<style>
.el-col{
    margin-top: 30px
}
</style>
