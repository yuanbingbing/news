<template>
	<div class="biaodan">
		<div class="biaodan1">
			<!-- 表单头部开始 -->
			<div class="fromHeader">
				<ul class="loginUl">
					<router-link to="/topic/all"><li class="taiozhuan">主页</li></router-link>
					<li class="loginLi">/</li>
					<li>登录</li>
				</ul>
			</div>
			<!-- 表单头部结束 -->
			<!-- 表达部分开始 -->
			<div class="inner">
			  <form action="/signin" method="post">
			  	<div id="signin_from">
        		<div class="tianxie">
        			<label>用户名</label>
        			<div>
        			  <input type="text" name="name" id="name">
        			</div>
        		</div>
        		<div class="tianxie top">
        			<label>密码</label>
        			<div>
        			  <input type="password" name="pass" id="pass">
        			</div>
        		</div>
        		<div class="button">
        			<button>登录</button>
        		</div>
			  	</div>
		    </form>
			</div>
			<!-- 表单部分结束 -->
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
}
</script>
<style type="text/css">
.biaodan{
	width: 18.75rem;
	height: 17.15rem;
	margin-top: 9.5rem;
}
.biaodan1{
	width: 18.25rem;
	height: 17.15rem;
	background: #fff;
	margin:0 auto;
	border-radius: 10px;
}
/*表单头部开始*/
.fromHeader{
	width: 17.25rem;
	height: 1.0rem;
	padding:0.5rem;
}
.loginUl {
	clear: both;
}
.loginUl li{
	float: left;
	font-size: 0.7rem;
	color:#888;
}
.loginLi{
	margin:0 0.25rem;
}
.loginUl .taiozhuan{
	color:#4f9639;
}
/*表单头部结束*/
/*表单身体部分开始*/
.inner{
	width: 17.25rem;
	height: 14.15rem;
	padding:0.5rem;
}
#signin_from{
	width: 17.25rem;
	height: 11.15rem;
	margin-top: 2.0rem;
}
.tianxie{
	width: 17.25rem;
	height: 2.75rem;
}
.top{
	margin-top: 1.0rem
}
label{
	display: block;
  margin-bottom: 5px;
	font-size: 0.7rem;
  font-weight: 800;
  line-height: 1.0rem;
}
/*密码用户名*/
#pass,#name{
	width: 13.5rem;
	height: 1.0rem;
	padding:0.2rem 0.3rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	outline: none;
	background-color: rgb(250, 255, 189);
}
.button{
	width: 17.25rem;
	height: 1.7rem;
	padding:1.0rem 0.5rem;
	margin-top: 0.25rem;
	text-align:center;
}
.button>button{
	width: 3.5rem;
	height: 1.4rem;
	padding:0 0.5rem;
	background: #3374de;
	border:none;
	outline: none;
	color:#fff;
}
/*表单身体部分结束*/
</style>