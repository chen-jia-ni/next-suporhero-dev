<template>
	<view class="page">
		<!-- 使用自定义标签 -->
		<!-- <helloComp myval="hello,my first uni-app~~~"></helloComp>
		<trailerStars innerScore="7.6" showNum="0"></trailerStars> -->
		<!-- 轮播图 start-->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<!-- indicator-dots:是否显示面板指示点 -->
			<!-- indicator-color:指示点颜色  默认 rgba(0, 0, 0, .3)-->
			<!-- autoplay:是否自动切换 -->
			<!-- interval 	Number 	5000 	自动切换时间间隔 	
				 duration 	Number 	500 	滑动动画时长	 -->
			
			<!-- 从后台取轮播图数------权限问题暂时无法获取
			<swiper-item v-for="carousel in carouselList">
				<image 
					:src="carousel.image"
					 class="carousel"></image>
			</swiper-item> -->
			
			<swiper-item>
				<image src="../../static/carousel/batmanvssuperman.png" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/spiderman.png" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图 end -->
		
		<!-- 热门超英 start -->
		<!-- 标题 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/hot.png" class="hot-ico"></image>
				<view class="hot-title">
					热门超英
				</view>
			</view>
		</view>
		<!-- 可滚动视图区域 -->
		<scroll-view scroll-x="true" class="page-block hot">
			<!--  -->
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/poster/civilwar.jpg" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/poster/civilwar.jpg" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/poster/civilwar.jpg" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/poster/civilwar.jpg" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/poster/civilwar.jpg" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
			
			<view class="single-poster">
				<view class="poster-wapper">
					<image src="../../static/poster/civilwar.jpg" class="poster"></image>
					<view class="movie-name">蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠蝙蝠侠</view>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!-- 后台获取海报数据start -->
			<!-- <view class="single-poster" v-for="superhero in hotSuperheroList">
				<view class="poster-wapper">
					<image :rc="superhero.cover" class="poster"></image>
					<view class="movie-name">
						{{superhero.name}}
					</view>
					<trailerStars :innerScore="superhero.score" showNum="1"></trailerStars>
					<view class="movie-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.1
						</view>
					</view>
				</view>
			</view>
		
		<!-- 后台获取海报数据end -->
		
		
		<!-- 热门超英 end -->
		<!-- 热门预告 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/interest.png" class="hot-ico"></image>
				<view class="hot-title">
					热门预告
				</view>
			</view>
		</view>
		
		<view class="hot-movies page-block">
			<video
			v-for="trailer in hotTrailerList"
				:src="trailer.trailer"
				:poster="trailer.poster"
				class="hot-movies-single"
				controls="">
			</video>
		</view>
		
		<!-- 热门预告 end -->
		
		<!-- 猜你喜欢 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/guess-u-like.png" class="hot-ico"></image>
				<view class="hot-title">
					猜你喜欢
				</view>
			</view>
		</view>
		
		<view class="page-block guess-u-like">
			<view class="single-like-movie">
				<image src="../../static/poster/justice.png" class="like-movie"></image>
				
				<view class="movie-desc">
					<view class="movie-title">神奇女侠</view>
					<trailerStars :innerScore="9.1" showNum="0"></trailerStars>
					<view class="movie-info">
						2018 / 美国 / 科幻 动作
					</view>
					<view class="movie-info">
						本·阿佛莱克 / 亨利·卡维尔 / 艾米·亚当斯 / 盖尔·加朵
					</view>
				</view>
				
				<view class="movie-oper" @click="praiseMe"><!-- 点击事件 -->
					<image src="../../static/icos/praise.png" class="praise-ico"></image>
					<view class="praise-me">
						赞一下
					</view>
					<!-- +1动画效果 -->
					<view :animation="animationData" class="praise-me animation-opacity">
						+1
					</view>
				</view>
			</view>
		</view>
		<!-- 猜你喜欢 end -->
	</view>
</template>

<script>
	//import common from "../../common/common.js";//引入common.js  common相当于外部组件引用进来
	//导入自定义组件
	import helloComp from "../../components/helloComp.vue";
	import trailerStars from "../../components/trailerStars.vue";
	
	export default {
		data() {
			return {
				carouselList:[],
				hotSuperheroList:[],
				hotTrailerList:[],
			}
		},
		onUnload(){
			//页面卸载的时候清除动画数据
			this.animationData={};
		},
		onLoad() {
			 var me=this;  //this--作用域-当前页面
			 
			 //在页面创建的时候，创建一个临时动画对象
			 this.animation=uni.createAnimation();
			 
			 //设置全局变量法1:获取common.js中的服务器地址
			// var serverUrl = common.serverUrl;
			 
			 //设置全局变量法2:通过挂载到main.js中获取服务器地址作为全局变量（更方便)
			 var serverUrl=me.serverUrl;
			 
			//发起网络请求  请求轮播图数据
			uni.request({
				//url: 'https://www.imovietrailer.com/superhero/index/carousel/list'; //仅为示例，并非真实接口地址。
				//https://www.imovietrailer.com/superhero-服务器地址，所有url共用，这样的写法不合理，可定义全局变量 拼接 如下
				url: serverUrl + '/index/carousel/list',
				
				method:"POST",
				success: (res) => {
					console.log(res.data);
					
					//获取真实数据前，判断状态是否为200
					if(res.data.status==200){
						var carouselList=res.data.data;
						me.carouselList=carouselList;
					}
				}
			});
			
			//查询热门超英
			uni.request({
				url: serverUrl + '/index/movie/hot?type=superhero',/* 需要加入查询参数 */
				method:"POST",
				success: (res) => {
					console.log(res.data);
					
					//获取真实数据前，判断状态是否为200
					if(res.data.status==200){
						var hotSuperheroList=res.data.data;
						me.hotSuperheroList=hotSuperheroList ;
					}
				}
			});
			
			//查询热门预告
			uni.request({
				url: serverUrl + '/index/movie/hot?type=trailer',/* 需要加入查询参数 */
				method:"POST",
				success: (res) => {
					console.log(res.data);
					
					//获取真实数据前，判断状态是否为200
					if(res.data.status==200){
						var hotTrailerList=res.data.data;
						me.hotTrailerList=hotTrailerList ;
					}
				}
			});
		},
		methods: {
			//实现点击动画效果  ps:在H5无法实现
			praiseMe(){
				//构建动画数据，并且通过step表示动画的完成
				this.animation.translateY(-60).opacity(1).step({
					duration:400
				});
				
				//导出动画数据到view组件，实现组件的动画效果
				this.animationData=this.animation.export();
				
				//还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration:0
					});
					this.animationData=this.animation.export();
				}.bind(this), 500);
			}

		},
		//注册组件
		components:{
			helloComp,
			trailerStars
		}
	}
</script>

<style>
	@import url("index.css");
</style>
