<template>
  <div class="head">
    
    <h1 class="logo">
      <router-link tag="a" to="/" class="link-logo">知乎日报</router-link>
    </h1>
    <span @click="type = type === 'topic' ? '' : 'topic'">主题日报</span>
    <span @click="type = type === 'section' ? '' : 'section'">专栏总览</span>
    <list :items="items" :type="type" v-show="type"></list>
  </div>
</template>

<script type="text/ecmascript-6">
  import list from './list'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        type: ''
      }
    },
    computed: {
      ...mapGetters(['topics', 'sections']),
      items () {
        let topic2 =  this.topics.slice(0,5);
        topic2.push({
          ...topic2[0],
          name:"更多",
           id : 666,
          thumbnail:'../more.jpg'
        });
         let sections2 =  this.sections.slice(0,5);
        sections2.push({
          ...sections2[0],
          name:"更多",
          id : 888,
          thumbnail:'../more.jpg'
        });
        return this.type ? (this.type === 'topic' ? topic2: sections2) : []
      }
    },
    components: {
      list
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head
    height: 80px
    line-height: 80px
    padding: 0 10px
    position: relative
    .logo
      display: inline-block
      overflow: hidden
      width: 220px
      background: transparent url(http://daily.zhihu.com/img/new_home_v3/top_logo.png) no-repeat 0 13px
      .link-logo
        display: block;
        height: 78px;
        font-size: 0;
        text-indent: -150%;
    span
      font-size: 1.8rem
      float: right
      cursor: pointer
      color: #008bed
      &:nth-of-type(1)
        margin-left: 20px
</style>
