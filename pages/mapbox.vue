<template>
  <div>
    Testing of Mapbox
    <div id="map" :onload="mapLoad()">
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  export default {
    data() {
      return {
        access_token: 'pk.eyJ1IjoibGlyYWoiLCJhIjoiY2tnNXdsNDA4MGZkbzJzcjB1YjM0a243ayJ9.UiUaXTrbjyh2z9E2akskJg',
        map: {}
      }
    },
    mounted() {
      this.createMap();
    },
    methods: {
      createMap() {
        mapboxgl.accessToken = this.access_token
        this.map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 15,
          center: [107.61861, -6.90389],
          pitch: 40,
          bearing: 20,
          antialias: true
        })
      },
      mapLoad() {
        debugger
        // const map = document.getElementById("map")
        // this.map.addSource('floorplan', {
        // // GeoJSON Data source used in vector tiles, documented at
        // // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
        // 'type': 'geojson',
        // 'data':
        // 'https://docs.mapbox.com/mapbox-gl-js/assets/indoor-3d-map.geojson'
        // });
        // this.map.addLayer({
        // 'id': 'room-extrusion',
        // 'type': 'fill-extrusion',
        // 'source': 'floorplan',
        // 'paint': {
        // // See the Mapbox Style Specification for details on data expressions.
        // // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
        
        // // Get the fill-extrusion-color from the source 'color' property.
        // 'fill-extrusion-color': ['get', 'color'],
        
        // // Get fill-extrusion-height from the source 'height' property.
        // 'fill-extrusion-height': ['get', 'height'],
        
        // // Get fill-extrusion-base from the source 'base_height' property.
        // 'fill-extrusion-base': ['get', 'base_height'],
        
        // // Make extrusions slightly opaque for see through indoor walls.
        // 'fill-extrusion-opacity': 0.5
        // }
        // });
      }
    }
  }
</script>

<style scoped>
#map{
   width:100%;
   height:100vh;
}
</style>