<template>
  <gmap-map
    :center="center"
    :zoom="7"
    :style="css">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"></gmap-marker>
  </gmap-map>
</template>

<script>
/// //////////////////////////////////////
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB2yuNuTseV6VTo8M2v2yQXBJSPw5Ng-Qs',
    v: 'OPTIONAL VERSION NUMBER'
    // libraries: 'places', //// If you need to use place input
  }
})

export default {
  data () {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } }
        /* { position: { lat: 11.0, lng: 11.0 } } */
      ],
      css: 'width: 100%; height: 600px;'
    }
  }
}
</script>
