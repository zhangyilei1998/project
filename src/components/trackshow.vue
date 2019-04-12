<template>
  <div class="indoor">
    <br>
    <svg style="width:780; height:400;" viewBox="0 0 4167 2190"></svg>
    <el-col>
    <el-button type="primary" plain @click.native="map">显示地图</el-button>
    <el-button type="primary" plain @click.native="move">显示轨迹</el-button>
    <el-button type="primary" plain @click.native="start">播放轨迹</el-button>
    <el-button type="primary" plain @click.native="pause">暂停</el-button>
    <el-button plain @click.native="reset">重置</el-button>
    </el-col>
  </div>
</template>
<script>
import * as d3 from 'd3';
//引入json文件
import myData from '../../static/data/track.json'
export default {
  name: 'indoorMap',
  data () {
    return {
      msg: 'Welcome to My indoorMap',
      //存放轨迹json文件
      trackData:'',
      //回放时的轨迹点的索引
      num:0,
      //定时器名称
      timer:null
    }
  },
  methods:{
  //显示地图
    map:function(){
    //练习d3.js用的语句
      d3.select(".test").remove();
      var test2 = d3.select(".test2").selectAll("p");
      test2.style("background-color","black");
      test2.data([0])
           .enter()
           .append("p")
           .text("hello");
    //  获得svg标签
      var svg = d3.select("svg");

//添加地图
      var imgs = svg.selectAll("image");
      imgs.data([0])
          .enter()
          .append("svg:image")
          .attr("xlink:href","../static/map1.jpg");
//添加位置标注图标，可用于用户位置的标注，目前还用不到
      var location1 = svg.append("g").attr('transform', 'translate(100,100)');
      location1.append('svg:image').attr('xlink:href', '../static/icon.png');
      var location2 = svg.append("g").attr('transform', 'translate(101,101)');
      location2.append('svg:image').attr('xlink:href', '../static/icon.png');
    },
//显示轨迹
    move:function(){
//添加轨迹
      var svg = d3.select("svg");
      var start = true;
      var path = "";
      //foreach读取json中的每个坐标的位置，并连接坐标形成路径，用path画出
      this.trackData.data.forEach(function(item){
                  var x = (item.x/1019)*4167;
                  var y = (item.y/1219)*2190;
                  //圆是最初想用来表示轨迹，发现坐标部分间隔太远，改用path
                  var circle2 = svg.append("circle")
                            .attr("cx",x)
                            .attr("cy",y)
                            .attr("r",20)
                            .style("fill","purple");
                  if(start){
                    path+="M"+x+" "+y+" ";
                    start=false;
                  }
                  else{
                    path+="L"+x+" "+y+" ";
                  }
             })
      //添加路径
      svg.append("path")
                .attr("fill","transparent")
                .attr("stroke","#000000")
                .attr("stroke-width","25")
                .attr("stroke-linecap","round")
                .attr("v-bind:id","moveTrack")
                .attr("d",path);
      //添加起点和终点的标注
      var start = this.trackData.data[0];
      var end = this.trackData.data[this.trackData.data.length-1];
      var startIcon = 'translate('+((start.x/1019)*4167-80)+','+((start.y/1219)*2190-200)+')';
      var endIcon = 'translate('+((end.x/1019)*4167-80)+','+((end.y/1219)*2190-200)+')';
      var location1 = svg.append("g").attr('transform', startIcon);
      location1.append('svg:image')
               .attr('xlink:href', '../static/start.png')
               .attr('width','200px')
               .attr('height','200px');
      var location2 = svg.append("g").attr('transform', endIcon);
      location2.append('svg:image')
               .attr('xlink:href', '../static/end.png')
               .attr('width','200px')
               .attr('height','200px');

    },
    //开始播放，设置循环执行函数，每0.5s执行一次
    start:function(){
      //防止多次添加循环执行函数
      if(!this.timer)
        this.timer = setInterval(this.showTrack,500);
    },
    //暂停播放
    pause:function(){
    //防止多次删除循环执行函数
      if(this.timer)
        clearInterval(this.timer);
        this.timer = null;
    },
    //重置播放
    reset:function(){
      if(this.timer){
        clearInterval(this.timer);
        this.timer = null;
      }
      this.num = 0;
      var svg = d3.select("svg");
      svg.select("#persentLocation").remove();
      svg.selectAll(".persentInf").remove();
      svg.select(".inforContent").remove();
    },
    //要循环执行的函数,每次循环删去前一个轨迹点，显示新的轨迹点
    showTrack:function(){
      var svg = d3.select("svg");
      var item = this.trackData.data[this.num];
      var x = (item.x/1019)*4167;
      var y = (item.y/1219)*2190;
      var time = item.time;
      console.log(this.num);
      console.log("x:"+x);
      console.log("y:"+y);
      svg.select("#persentLocation").remove();
      svg.selectAll(".persentInf").remove();
      svg.select(".inforContent").remove();
      //轨迹点
      var circle = svg.append("circle")
                      .attr("cx",x)
                      .attr("cy",y)
                      .attr("r",20)
                      .style("fill","red")
                      .attr("id","persentLocation");
      //提示框气泡
      var offset = 'translate('+(x-320)+','+(y-440)+')';
      var scale = 'scale(2.8 1.5)'
      var location = svg.append("g")
                        .attr("class","inforContent");
      var image = location.append("image")
                          .attr('transform', offset+scale)
                          .attr("xlink:href","../static/infor.png")
                          //.attr("transform","scale(2 1)");
      //提示内容
      var text = svg.append("text")
                    .attr("x",x+20)
                    .attr("y",y-260)
                    .text("x: "+item.x)
                    .style("font-size","70px")
                    .attr("class","persentInf");
      var text2 = svg.append("text")
                    .attr("x",x+20)
                    .attr("y",y-180)
                    .text("y: "+item.y)
                    .style("font-size","70px")
                    .attr("class","persentInf");
      var text3 = svg.append("text")
                    .attr("x",x+20)
                    .attr("y",y-100)
                    .text("time: "+time)
                    .style("font-size","70px")
                    .attr("class","persentInf");
      this.num += 1;
      if (this.num >= this.trackData.data.length) {
        clearInterval(this.timer)
        this.num = 0
      }
    }
  },
  created () {
//在这保存json文件到trackData中
    this.trackData= myData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
