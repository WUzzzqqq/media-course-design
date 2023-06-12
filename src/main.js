import './assets/main.css'

import { createApp } from 'vue'
import baiduMap from 'vue3-baidu-map-gl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

let app = createApp(App)

app.use(ElementPlus)
app.use(baiduMap, {
    ak: 'Qggj9BGhgmka1ANSlK7uRKVyVTdSjtnC',
    plugins: ['TrackAnimation']
})
app.mount('#app')