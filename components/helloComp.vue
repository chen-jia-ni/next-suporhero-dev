<!-- 组件  又可以称为 自定义标签 -->
<!-- 使用自定义组件步骤：
		1.在<script>标签内导入自定义组件
			import helloComp from "../../components/helloComp.vue";
		2.注册组件
			在methods: { },下加上components:{helloComp}
		3.使用————在需要组件的地方加上自定义标签
			<helloComp></helloComp>
 -->
<template name="helloComp">     <!-- 定义组件的名称为helloComp -->
	<view>
		{{msg}}
		<view>
			<input type="text" :value="myval" class="txt" />
		</view>
		
	</view>
</template>

<script>
	export default {
		
		//定义组件的名称为helloComp 
		name:"helloComp",
		
		data() {
			return {
				msg:"你好，这是自定义组件~~~"
			};
		},
		//定义组件内部使用的属性
		props:{
			//自定义一个变量，用于接受父组件（首页或其他页面——即2调用组件的页面）传入的参数值
			myval:{
				type:String   //定义这个参数的类型
			}
		}
	}
</script>

<style>
	.txt{
		color: red;
	}
</style>
