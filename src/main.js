import './assets/main.css'

import BaiduMap from 'vue-baidu-map'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

let app = createApp(App)

app.use(ElementPlus)
app.mount('#app')

app.use(BaiduMap, {
    ak: '1YLpdgUFuoXtxMQsiFlpn9G1BYdM1mM9'
})