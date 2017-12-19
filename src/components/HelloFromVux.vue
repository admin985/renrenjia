<template>
  <div class="wrapper">
    <ul class="content" :style="{width:wrapperWidth+'px'}">
      <li v-for="(item,index) in menu" :key="item.id" :class="{active:activeId === item.id}" @click="onTabChange(item.id)">
        {{item.name}}
      </li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>
<style>
  .wrapper {
    height: 50px;
    width: 100%;
    overflow: hidden;
  }

  .content {
    height: 50px;

  }

  .content li {
    width: 100px;
    list-style: none;
    float: left;
    background: pink;
  }
</style>
<script>
  import { Group, Cell } from 'vux'
  import BScroll from 'better-scroll'

  export default {
   // props: ['onTabSelectedChange','menu','activeId'],
   props:{
     
      onTabSelectedChange:{
        type:Function,
        default(v){
          console.log(v)
        }
      },
      menu:{
        type:Array
      },
      activeId:Number
   },
    components: {
      Group,
      Cell
    },
    data() {
      return {
       
      }
    },
    computed: {
      wrapperWidth() {
        return this.menu.length * 100;
      }
    },
    methods: {
      onTabChange(activeId) {
        //this.activeId = activeId;
        this.onTabSelectedChange(activeId);
        //console.log(activeId)
      }
    },
    mounted() {
      const wrapper = document.querySelector('.wrapper')
      const scroll = new BScroll(wrapper, {
        scrollX: true,
        click: true
      });
console.log(this)
      this.onTabSelectedChange(this.activeId);

      
    }
  }
</script>

<style>
  .vux-demo {
    text-align: center;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>