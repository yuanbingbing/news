<template>
  <div id="userShow">
  	<!-- 用户信息开始 -->
  	<div class="information">
      <div class="userHeader">
        <p><span><router-link to="topic/all">主页</router-link></span>/</p>
      </div>
      <!-- 用户头像和用户名开始 -->
      <div class="userImg">
      	<!-- 头像开始 -->
      	<div class="userimg">
          <img v-lazy="userData.avatar_url">
      	</div>
      	<!-- 头像结束 -->
      	<!-- 用户名开始 -->
      	<a class="username">{{ userData.loginname }}</a>
      	<!-- 用户名结束 -->
	      <!-- 关联和积分开始 -->
	      <div class="integral">
      		<ul>
      			<li class="ginterals"><span>{{ userData.score }}</span>积分</li>
      			<li class="hair"><img src="../../assets/images/git.png"><a href="#">@{{ userData.loginname }}</a></li>
      		</ul>
	      </div>
	      <!-- 关联和积分结束 -->
	      <!-- 注册时间开始 -->
	      <p class="RegistrationTime">注册时间 {{ times(userData.create_at) }}</p>
	      <!-- 注册时间结束 -->
      </div>
      <!-- 用户头像和用户名结束 -->
      <!-- 创建的话题开始 -->
      <div class="creatingTopics" v-if="userData.recent_topics.length">
    	  <!-- 头部开始 -->
    	  <div class="createdHeader">
					最近创建的话题
    	  </div>
    	  <!-- 头部结束 -->
    	  <div class="createdBody" v-for="item in userData.recent_topics">
    	  	<!-- 头像开始 -->
    	  	<div class="createdImg"><img v-lazy="item.author.avatar_url"></div>
    	  	<!-- 头像结束 -->
    	  	<!-- 标题开始 -->
    	  	<div class="createdTitle">
    	  		<!-- 精华 -->
    	  		<span>精华</span>
    	  		<p>{{ item.title }}</p>
    	  	</div>
    	  	<!-- 标题结束 -->
    	  	<!-- 访问人数开始 -->
    	  	<div class="theNumberOf">
    	  		<span>6</span>
    	  		<span>/</span>
    	  		<span>3321</span>
    	  	</div>
    	  	<!-- 方为人数结束 -->
    	  	<!-- 时间开始 -->
    	  	<div class="createdTime">{{ times(item.last_reply_at) }}</div>
    	  	<!-- 时间结束 -->
    	  </div>
      </div>
      <!-- 创建的话题结束 -->

      <!-- 创建的话题开始 -->
      <div class="creatingTopics" v-if="userData.recent_replies.length">
    	  <!-- 头部开始 -->
    	  <div class="createdHeader">
					最近参与的话题
    	  </div>
    	  <!-- 头部结束 -->
    	  <div class="createdBody" v-for="item in userData.recent_replies">
    	  	<!-- 头像开始 -->
    	  	<div class="createdImg"><img v-lazy="item.author.avatar_url"></div>
    	  	<!-- 头像结束 -->
    	  	<!-- 标题开始 -->
    	  	<div class="createdTitle">
    	  		<!-- 精华 -->
    	  		<span>精华</span>
    	  		<p>{{ item.title }}</p>
    	  	</div>
    	  	<!-- 标题结束 -->
    	  	<!-- 访问人数开始 -->
    	  	<div class="theNumberOf">
    	  		<span>6</span>
    	  		<span>/</span>
    	  		<span>3321</span>
    	  	</div>
    	  	<!-- 方为人数结束 -->
    	  	<!-- 时间开始 -->
    	  	<div class="createdTime">{{ times(item.last_reply_at) }}</div>
    	  	<!-- 时间结束 -->
    	  </div>
      </div>
      <!-- 创建的话题结束 -->
  	</div>
  	<!-- 用户信息结束 -->
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      userData: []
    }
  },
  created () {
    this._getUserData()
  },
  methods: {
    _getUserData () {
      let name = this.$route.params.name
      let userData = 'https://www.vue-js.com/api/v1/user/' + name
      axios.get(userData, {
      }).then((res) => {
        console.log(res)
        if (res.data.data) {
          this.userData = res.data.data
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    times (item) {
      var time = new Date(item)
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
    $route: function () {
      // console.log(this.$router.params.name)
      this._getUserData()
    }
  }
}
</script>
<style type="text/css">
#userShow{
	width: 18.75rem;
	height: auto;
	margin-top: 9.5rem;
}
/*用户信息开始*/
.information{
	width: 18.25rem;
	height: 10.25rem;
	margin: 0 auto;
}
.userHeader{
	width: 17.25rem;
	height: 1.0rem;
	padding:0.5rem;
	background: #f6f6f6;
	border-radius: 3px 3px 0 0;
}
.userHeader p{
	font-size: 0.7rem;
}
.userHeader span{
	margin-right: 8px;
	color:#4f9639;
}
/*用户头像和用户名开始*/
.userImg{
	width:17.25rem;
	height: 7.2rem;
	padding:0.5rem;
	border-top:1px solid #e5e5e5;
	background: #fff;
	clear:both;
}
/*头像开始*/
.userimg{
	width: 2.0rem;
	height: 2.0rem;
	margin-right: 20px;
	float: left;
}
.userimg img{
	width: 100%;
	height: 100%;
}
/*头像结束*/
/*用户名开始*/
.username{
  font-size: 0.7rem;
  color:#778087;
}
/*用户名结束*/
/*用户头像和用户名结束*/
/*关联和积分开始*/
.integral{
	width: 17.25rem;
	height: 2.8rem;
	float: left;
	margin-bottom: 15px;
}
.ginterals{
	font-size: 0.7rem;
	color:#333;
	height: 1.25rem;
	line-height: 1.25rem;
}
.ginterals span{
	margin-right: 5px;
}
.hair img{
	width: 0.9rem;
	height: 0.9rem;
	margin-right: 5px;
}
.hair a{
	font-size: 0.7rem;
	color:#778087;
}
/*关联和积分结束*/
/*注册时间开始*/
.RegistrationTime{
	font-size: 0.7rem;
	color:#ababab;
}
/*注册时间结束*/
/*创建话题开始*/
.creatingTopics{
	width:18.25rem;
	height: auto;
}
/*头部开始*/
.createdHeader{
	width: 17.25rem;
	height: 1.0rem;
	padding:0.5rem;
	color:#1c6132;
	font-size: 0.7rem;
	line-height: 1.0rem;
	background: #f6f6f6;
}
/*头部结束*/
.createdBody{
	width: 17.25rem;
	height: 1.5rem;
	border-top:1px solid #f0f0f0;
	clear: both;
	position: relative;
	background: #fff;
  padding:1rem 0.5rem;
  border-bottom: 1px solid #ccc;
}
.createdImg{
	width: 1.5rem;
	height: 1.5rem;
	float: left;
}
.createdImg img{
	width: 100%;
}
/*标题开始*/
.createdTitle{
width: 15.25rem;
height: 1.5rem;
margin-left:2.0rem;
}
.createdTitle span{
	font-size: 0.6rem;
	padding:0.15rem;
	background: #369219;
	color:#fff;
	border-radius: 0.15rem;
}
.createdTitle p{
	float: left;
	width: 10.5rem;
	height: 1.5rem;
	float: right;
	margin-right: 2.5rem;
	font-size: 0.7rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space:nowrap;
	line-height: 1.5rem;
	color:#08c;
}
/*标题结束*/
/*访问人数开始*/
.theNumberOf{
	width: 3.5rem;
	height: 1.2rem;
	position: absolute;
	left:2.5rem;
	top:2.25rem;
	font-size: 0.6rem;
	line-height: 1.2rem;
}
/*访问人数结束*/
.createdTime{
	min-width: 50px;
	height: 1.5rem;
	font-size: 0.6rem;
	line-height: 1.5rem;
	position: absolute;
	right: 0.5rem;
	top:1.0rem;
	color:#777;
}
/*创建话题结束*/
/*用户信息结束*/
</style>