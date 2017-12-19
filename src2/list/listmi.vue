<template>
 <mt-loadmore  :top-method="loadTop" :bottom-method="loadBottom"  @top-status-change="handleTopChange" ref="loadmore">
    <ul>
      <li v-for="item in list" :key="item.id">
         <div>
             <h1> {{ item.title }}</h1>
             <p>时间</p>
         </div>
         <div>
             <img src="" alt="">
         </div>
          </li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
import Vue from "vue";
import { Loadmore } from "mint-ui";
import axios from "axios";
Vue.prototype.$http = axios;
Vue.component(Loadmore.name, Loadmore);

export default {
  data() {
    return {
      topStatus: "",
      //颜色都不对 路径

      list: [
        { title: "pop", id: 1 },
        { title: "pop", id: 2 },
        { title: "pop", id: 3 },
        { title: "pop", id: 4 },
        { title: "pop", id: 5 },
        { title: "pop", id: 6 },
        { title: "pop", id: 7 },
        { title: "pop", id: 8 },
        { title: "pop", id: 9 },
        { title: "pop", id: 10 }
      ]
    };
  },
// created(){
//     //组件创造完成之后获取数据
//     this.getData();
// },
  methods: {
    // getData() {
    //   axios
    //     .post("http://test.renrenjiakeji.com/prog/Mobilecms/columnList_m")
    //     .then(function(res) {
    //       console.log(res.data);
    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });
    // },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 1000);
    },
    loadBottom() {
      setTimeout(() => {
        this.allLoaded = true; // 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    }
    // ...
  }
  // ...
};
</script>
<style>
.container {
  height: 600px;
  overflow: hidden;
}

ul {
  height: 1000px;
}

ul li {
  height: 100px;
  background: powderblue;
  border-bottom: 1px solid #999;
}
</style>