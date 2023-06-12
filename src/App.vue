<template>
  <div style="width: 1000px;height: 600px">
    <div class="map-wrapper">
        <BMap enableScrollWheelZoom ref="map" @initd="get"  :center="location.point || undefined">
          <BNavigation3d />
          <template v-if="!isLoading">
            <BMarker :position="location.point"></BMarker>
            <BCircle
                strokeStyle="solid"
                strokeColor="#0099ff"
                :strokeOpacity="0.8"
                fillColor="#0099ff"
                :fillOpacity="0.5"
                :center="location.point"
                :radius="location.accuracy"
            />
          </template>
        </BMap>
    </div>
  </div>
</template>
<style scoped>
.map-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
<script>
import {ElMessage} from "element-plus"
import { ref } from 'vue'
import { useBrowserLocation } from 'vue3-baidu-map-gl'
const map = ref()
const { get, location, isLoading, isError, status } = useBrowserLocation(null, () => {
  map.value.resetCenter()
})
export default{

  data(){
    return{
      msg:'ss',
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods:{
    pop(){

      ElMessage({
        message: '你好,'+this.msg,
        type: 'info'
      })
    }
  }
}
</script>