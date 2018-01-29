<template>
  <div class="wMenu">
     <label v-for="(menu, index) in menuList">

       <el-submenu v-if="menu.havingChild" :index="menu.id">
         <template slot="title">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.menuName }}</span>
          </template>
          <wMenu :menuList="menu.children"></wMenu>
       </el-submenu>
      
       <el-menu-item  v-if="!menu.havingChild" :index="menu.id">
         <i :class="menu.icon"></i>
         <span slot="title">{{ menu.menuName }}</span>
       </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: 'wMenu',
  props: ['menuList'],
  data () {
    return {
    }
  },
  methods: {
    getMenuSize() {
      return this.menuList.length;
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
