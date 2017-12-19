<template>
  <div class="hello">
   <tab :onTabSelectedChange="f" :menu="menu" :activeId="activeId"/>
   <list  :onTabSelectedChanges="ff"></list>
   </div>
</template>

<script>
import Tab from "../components/HelloFromVux.vue";
import List from "../list/list.vue";
const host = "http://test.renrenjiakeji.com";

import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      menu: [],
      activeId: 2,
      msg: "Hello World!",
     
    };
  },
   created() {
    this.initData();
    // this.page = page++;
  },
  methods: {
    f(id) {
      this.activeId = id;
  
      console.log(id, "----- 我是调用者");
    },
     ff(id) {
       this.activeId = id;
       console.log(id, "----- 我是调用者");
    },
    initData() {
      this.getsData().then(res => {
       // console.log(res);
        this.data = res;
      });
    },
   getsData() {
      return axios
        .post(`${host}/prog/Mobilecms/columnList_m`,)
        .then(res => {
         this.menu  = res.data.data;
         
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  components: {
    Tab,
    List
    
  },

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
