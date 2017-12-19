<template>
  <div class="hello">
   <tab :onTabSelectedChange="f" :menu="menu" :activeId="activeId"/>
   <list></list>
   </div>
</template>

<script>
  import Tab from '../components/HelloFromVux.vue';
  import List from '../list/list.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      menu: [
          { name: 'hahahhah', id: 1 },
          { name: 'hahahahq', id: 2 },
          { name: 'yuyuyuyu', id: 3 },
          { name: 'opopoppp', id: 4 },
          { name: 'shabisha', id: 5 },
          { name: 'shabiqiang', id: 6 },
          { name: 'shabiqiang', id: 62 }
        ],
        activeId: 2,
        msg: 'Hello World!'
    }
  },
  methods:{
    f(id){
      this.activeId = id;
      console.log(id,'----- 我是调用者')
    }
  },
  components:{
    Tab,List
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
