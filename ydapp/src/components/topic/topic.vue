<template>
	<div id="main">
		<div class="parane">
      <div class="celi" v-for="(item,index) in topicR">
        <!-- 头像开始 -->
        <router-link :to="'/user/' + item.author.loginname" class="img">
          <img v-lazy="item.author.avatar_url">
        </router-link>
        <!-- 头像结束 -->
      <router-link :to="'/topic/' + torouter.tab + '/' + item.id">
        <!-- 标题开始 -->
        <div class="title">
          <span v-if="item.top">置顶</span>
          <span v-else-if="item.good">精华</span>
          <span v-else class="wod">问答</span>
          <a href="#" class="nowrap">{{ item.title }}</a>
        </div>
        <!-- 标题结束 -->
        <!-- 回复开始 -->
        <span class="spab">
          <span>{{ item.reply_count }}</span>/<span>{{ item.visit_count }}</span>
        </span>
        <!-- 回复结束 -->
        <!-- 发帖时间开始 -->
        <a href="#" class="time">{{ times(item) }}</a>
        <!-- 发帖时间结束 -->
      </router-link>
      </div>
		</div>
	</div>
</template>
<script type="text/javascript">
import { getTopicList } from '@/common/js/getData'
export default {
  data () {
    // 定义数据
    return {
      topicR: [],
      torouter: [],
      limits: 30
    }
  },
  mounted () {
    this._getData()
    var box = document
    var s = this
    box.onscroll = function () {
      var height = document.body.clientHeight
      var top = window.pageYOffset
      var t = window.innerHeight
      if (top + t >= height - 50) {
        s._getData()
      }
    }
  },
  methods: {
    _getData () {
      let param = {
        page: 1,
        tab: this.$route.params.tab,
        limit: this.limits ++
      }
      getTopicList(param).then((res) => {
        // console.log(res.data.data)
        this.topicR = res.data.data
        this.torouter = res.config.params
      }).catch((error) => {
        console.log(error)
      })
    },
    times (item) {
      var time = new Date(item.last_reply_at)
      var jian = new Date()
      var shi = time.getTime()
      var ke = jian.getTime()
      var yue = Math.floor((ke - shi) / 1000 / 60 / 60 / 24 / 30)
      if (yue > 0) {
        return yue + '月前'
      }
      var tian = Math.floor((ke - shi) / 1000 / 60 / 60 / 24)
      if (tian > 0) {
        return tian + '天前'
      }
      var xiao = Math.floor((ke - shi) / 1000 / 60 / 60)
      if (xiao > 0) {
        return xiao + '小时前'
      }
      var fen = Math.floor((ke - shi) / 1000 / 60)
      if (fen) {
        return fen + '分前'
      }
      var maio = Math.floor((ke - shi) / 1000)
      if (maio) {
        return maio + '秒前'
      }
    }
  },
  watch: {
    // 检测路由信息变化，重新发送请求
    $route: function () {
      // console.log(this.$route.params.tab)
      this.limits = 30
      this._getData()
    }
  }
}
</script>
<style type="text/css">
#main{
	width: 18.75rem;
	height: auto;
  margin-top: 11rem;
}
.parane{
	width: 18.75rem;
	height: auto;
	background: #fff;
	margin: 0 auto;
}
.celi{
  width: 17.25rem;
  height: 2.0rem;
  padding:0.5rem;
  clear: both;
  position: relative;
  margin:0.6rem 0;
  border-bottom: 1px solid #ccc;
}
/*头像开始*/
.img{
  float: left;
}
.img>img{
  width: 1.5rem;
  height: 1.5rem;
}
/*头像结束*/
/*标题开始*/
.title{
  width:15.25rem;
  height: 1.5rem;
  float: left;
}
.title>span{
  font-size: 0.6rem;
  padding:0.1rem 0.2rem;
  background: #369219;
  border-radius: 0.25rem;
  margin-left: 10px;
  color:#fff;
  float: left;
}
.nowrap{
  display: inline-block;
  width: 12.0rem;
  height: 1.25rem;
  font-size: 0.7rem;
  color:#888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  margin-left: 5px;
}
.title>.wod{
  background: #ccc;
}
/*标题结束*/
/*回复开始*/
.spab{
  display: inline-block;
  width: 3.5rem;
  height: 1.2rem;
  position: absolute;
  left: 4.0rem;
  top: 1.75rem;
  font-size: 0.6rem;
  color:#888;
}
/*回复结束*/
/*发帖时间开始*/
.time{
  display: inline-block;
  padding:0.25rem;
  font-size: 0.7rem;
  position: absolute;
  right: 1.0rem;
  top:1.0rem;
  line-height: 1.75rem;
}
/*发帖时间结束*/
.yujiazai{
  width: 18.25rem;
  height: 1.5rem;
  margin:0 auto;
  text-align: center;
}
</style>