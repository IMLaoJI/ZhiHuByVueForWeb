<template>
  <div class="app" id="box">
    <v-header></v-header>
    <loading :mask="false" v-if="loading"></loading>
    <router-view keep-alive ></router-view>
    <float></float>
  </div>
</template>

<script type="text/ecmascript-6">
// import json from './json.js'
// import particles from 'exports?particlesJS=window.particlesJS,window.pJSDom!particles.js'
  import loading from 'components/common/loading'
  import vHeader from 'components/common/header'
  import float from 'components/common/float'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        loading: this.loading
      }
    },
  //   mounted () {
  //   particles.particlesJS('box', json, function () {
  //     console.log('callback - particles.js config loaded')
  //   })
  // },
    computed:{
      ...mapGetters(['news', 'topics', 'sections', 'index','loading'])

    },
    methods: {
   
    },
    components: {
      loading,
      vHeader,
      float
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
