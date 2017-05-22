<template>
 <el-row>
  <el-col :span="6" v-for="(item, index) in items" :key="index" :offset="index > 0 ? 3 : 3" class="blo">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgProxy(item.thumbnail)" class="image">

      <div style="padding: 14px;">
        <span  class="name" style="{ }" >{{item.name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{item.description}}</time>
          <el-button type="text" class="button" @click="link(item.id)">进去看看</el-button>
        </div>

      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script type="text/ecmascript-6">
  import newsitem from './common/newsitem'
  import {imgProxy} from 'common/js/utils'
  import { mapGetters, mapActions } from 'vuex'

  export default {
      data(){
        return {
            items: []
        }
      },
    components: {
      
    },
    computed: {
        ...mapGetters(['topics', 'sections']),
     
    },
    
    methods: {
      imgProxy,
        link (id) {
            console.log
           this.$router.push(`/section/${id}`)
      }
    },
    mounted () {
      this.items = this.sections;
      console.log(this.items);
    },
    watch: {
     
    }
  }
</script>

<style scoped>
.name{
 margin-left: 30px
}
  .time {
    font-size: 13px;
    color: #999;
  }
.blo {
    padding-top: 10px;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
