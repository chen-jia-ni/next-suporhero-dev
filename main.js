import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//挂载？？
Vue.prototype.serverUrl="https://www.imovietrailer.com/superhero";        //生产环境--作用域仅在本文件，需导出，用export
//const serverUrl="https://www.imovietrailer-dev.com/superhero";  //生产环境-bendihuangjing 


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
