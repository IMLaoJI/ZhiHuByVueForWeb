<template>
  <div class="sectionlist">
    <div class="section" v-if="sectionList.stories">
      <newsitem v-for="news in sectionList.stories" :key="id" :item="news"></newsitem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import newsitem from './common/newsitem'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      newsitem
    },
    computed: {
      ...mapGetters(['sectionList']),
      id () {
        // console.log(this.$route.params.id);
        return this.$route.params.id
      }
    },
    methods: {
      ...mapActions(['getSectionList','changeLoading'])
    },
    mounted () {
      this.changeLoading();
      this.getSectionList(this.$route.params.id)
          .then(() => {
           
          })
    },
    watch: {
      id () {
         this.changeLoading();
        this.getSectionList(this.$route.params.id)
            .then(() => {
             
            })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
