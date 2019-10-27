<template name="trailerStars">
	<view class="movie-score-wapper">
		<!-- <image src="../../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../../static/icos/star-gray.png" class="star-ico"></image>
		<view class="movie-score">
			9.1
		</view> -->
		
		<!-- 循环输出黄色星星 -->
		<image
			v-for="yellow in yellowScore"
			src="../../static/icos/star-yellow.png"
			class="star-ico"></image>
		<!-- 循环输出灰色星星 -->
		<image
			v-for="gary in garyScore"
			src="../../static/icos/star-gray.png"
			class="star-ico"></image>
		<view class="movie-score" v-if="showNum==1">
			{{9.1}}
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"trailerStars",
		
		data() {
			return {
				yellowScore:0,
				garyScore:5
			};
		},
		
		props:{
			innerScore:0,  //定义外部传入的分数
			showNum:0      //是否需要显示具体的分时 1：显示  0：不显示
		},
		
		
		//生命周期，组件创建完成后被调用
		created() {
			var tempScore=0;
			if(this.innerScore != null && this.innerScore != undefined && this.innerScore != ''){
				tempScore=this.innerScore;
			}
			//获得黄色部分星星数
			var yelloScore=parseInt(tempScore/2); //js的一个方法  把值转化为Int类型
			//灰色部分
			var grayScore=5-yelloScore;
			
			//绑定数据
			this.yellowScore=yelloScore;
			this.garyScore=grayScore;
			
		}
	}
</script>

<style>
	.movie-score-wapper{
		display: flex;
		flex-direction: row;
	}
	.star-ico{
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;
	}
	.movie-score{
		font-size: 12upx;
		color: grey;
		margin-left: 8upx;
	}
</style>
