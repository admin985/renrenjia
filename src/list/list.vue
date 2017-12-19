<template>
    <div class="container">
        <mt-loadmore   :top-method="loadTop"   :bottom-method="loadBottom"  @top-status-change="handleTopChange" ref="loadmore">
      

            <div v-for="group in data" :key="group.id">
                <div style="height:60px;float:left;width:70%">
                {{group.title}}
                </div>

                <div><img :src="host+group.data" alt="" style="height:60px;float:left;width:30%"></div>
              
            </div>

            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>

    </div>
</template>
<script>
const host = "http://test.renrenjiakeji.com";
import BScroll from "better-scroll";
import axios from "axios";
export default {
  data() {
    return {
      host, //host:host
      topStatus: "",
      data: [],
      page: 0,
      title: "-",
      ff:'',
    };
  },
  
  beforeCreate() {},
  updated() {
    // this.scroll.refresh();
  },
    props:{
     
      onTabSelectedChangeS:{
        type:Function,
        default(ff){
          console.log(ff)
        }
      },
      
      ff:Number
   },
  
  created() {
    this.initData();
    // this.page = page++;
  },
  methods: {
    initData() {
      this.getData(10).then(res => {
       // console.log(res);
        this.data = res;
      });
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      this.getData(10).then(res => {
        this.data = this.data.concat(res);
        this.topStatus = false;
        this.$refs.loadmore.onTopLoaded();
      });
    },
    loadBottom() {
         this.getData(10).then(res => {
        this.data = this.data.concat(res);
        this.topStatus = false;
        this.$refs.loadmore.onBottomLoaded();
      });
     
    },
    getData(id) {
      const page = (this.page = this.page + 1);
    
      return axios
        .post(`${host}/prog/Mobilecms/newsList_m`, `type=${id}&page=${page}`)
        .then(res => {
          const data = this.formateData(res.data.data);
        //  console.log(data, 999);
          return Promise.resolve(data);
        })
        .catch(e => {
         
         console.log(e);
        });
    },
    formateData(data) {
     
      return data.map(item => {
        return {
          title: item.title,
          data: item.img_id[0],
        };
      });
    },
    
    //  onTabChanges(activeId) {
    //     //this.activeId = activeId;
        
    //     console.log(activeId)
    //   }
  }
};
</script>
<style>

</style>