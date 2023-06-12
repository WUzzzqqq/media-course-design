import './assets/main.css'

import { createApp } from 'vue'
import Vue3BaiduMapGL from 'vue3-baidu-map-gl'
import baiduMap from 'vue3-baidu-map-gl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

let app = createApp(App)

app.use(ElementPlus)
app.use(Vue3BaiduMapGL)
app.use(Vue3BaiduMapGL, {
    ak: '1YLpdgUFuoXtxMQsiFlpn9G1BYdM1mM9',
    plugins: ['TrackAnimation']
})
app.mount('#app')