<template>

  <div class="wrapper">
    <mt-header title="资讯详情">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  
</mt-header>
      <div class="tops">
         <img :src="host+img" alt="">
        <div>
          <span>{{title}}</span>
          <p>{{create_time}}</p>
         </div>
      </div>
         <div v-html="content"></div>  
      <p>

      </p>
  </div>
</template>
<style lang="less">
.tops {
  width: 100%;
  background: white;
  height: 55px;
  border-bottom: 1px solid #ececec;
  img {
    height: 40px;
    width: 40px;
    margin: 9px;
    border-radius: 15px;
    float: left;
  }
  div {
    span {
      color: #383838;
      font-size: 17px;
    }
    p {
      font-size: 13px;
    }
    float: left;
    color: #999;
    height: 55px;
    line-height: 27px;
  }
}
</style>

<script>
const host = "http://test.renrenjiakeji.com";
import { Group, Cell } from "vux";
import { Header } from 'mint-ui';
import BScroll from "better-scroll";
import axios from "axios";
export default {
  name: "Details",
  data() {
    return {
      host,
      title: "45666",
      create_time: ""
    };
  },
  created() {
    this.initData();
    // this.page = page++;
  },
  methods: {
    initData() {
      this.outData().then(res => {
        // console.log(res);
        this.data = res;
      });
    },
    outData() {
      const id = 22;
      return axios
        .post(`${host}/prog/Mobilecms/newsDetail_m`, `news_id=${id}`)
        .then(res => {
          this.title = res.data.id;
          const data = this.detailformateData(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    detailformateData(data) {
      return (
        (this.title = data.data.title),
        (this.create_time = data.data.create_time),
        (this.img = data.data.img_id[0]),
        (this.content = data.data.content)
      );
    }
  }
};
</script>
