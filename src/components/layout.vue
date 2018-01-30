<template>
  <div>
    <el-container direction="vertical">

        <!-- 导航  -->
        <el-row>
          <el-col :span="18">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#485057"
              text-color="#fff"
              active-text-color="#ffd04b"
              width="1247px"
              >
              <el-menu-item class="w-logo" index="0">
                <img src="../assets/w-sxij-backstageSupporter.png" alt="w-logo" class="w-logo-img">
              </el-menu-item>
              <div class="larry-side-menu" @click="changeMenu">
                    <i class="fa fa-th-large" aria-hidden="true"></i>
              </div>
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="3">
                订单管理
              </el-menu-item>

            </el-menu>
            
          </el-col>
          <el-col :span="6">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#485057"
            text-color="#fff"
            active-text-color="#ffd04b"
            width="1247px"
            >
              <el-menu-item index="4">
                <!-- <a href="javascript:;" class=".w-a-notextline"> -->
                    <img src="../assets/武玉龙.png" class="layout-nav-img"> 
                    <strong>武玉龙</strong>
                <!-- </a> -->
              </el-menu-item>
              <el-submenu index="5" class="w-user">
                <template slot="title">个人中心</template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="6" @click="logout">
                <!-- <a href="#" class=".w-a-notextline">退出</a> -->
                <!-- <el-button type="text" @click="logout">退出</el-button> -->
                退出
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>

      <el-container>

          <!-- 菜单 -->
          <div class="w-left-menu">
            <el-menu 
              default-active="2-1" 
              class="el-menu-vertical" 
              @open="handleOpen" 
              @close="handleClose" 
              :collapse="isCollapse"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              >
              <w-menu ref="$wMenu" v-bind:menuList="menuList"></w-menu>
               
              </el-menu>
          </div>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import wMenu from '../components/menu'
export default {
  name: 'layout',
  data () {
    return {
      activeIndex: '1',
      isCollapse: false,
      menuList: []
    }
  },
  created(){
        this.loadData();
  },
  methods: {

    loadData() {
      this.axios({
        url: '/api/menuList',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        params: {

        }
      }).then((response)=>{
        this.menuList=response.data;
      }).catch((response)=>{
        console.log(response);
      })
    },

    handleSelect(key, keyPath) {
      var jsonData;
      this.axios({
        url: '/api/posts',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        params: {

        }
      }).then((response)=>{
        jsonData=response.data;
        this.$message({
          message: '选择了一个导航的菜单, key = ' + jsonData[0].title,
          type: 'success',
          center: true,
          showClose: true
      });
      }).catch((response)=>{
        console.log(response);
      })
      
    },
    handleOpen(key, keyPath) {
      this.$message({
          message: '打开左侧菜单, key = ' + key,
          type: 'warning',
          center: true,
          showClose: true
      });
    },
    handleClose(key, keyPath) {
      this.$message('关闭左侧菜单, key = ' + key);
    },
    changeMenu() {
      let size = this.$refs.$wMenu.getMenuSize();
      this.$notify({
          title: 'notify消息通知',
          message: '调用子组件wMenu的getMenuSize方法, size = ' + size,
          type: 'success'
      });
      this.$message({
          message: '修改左侧菜单显示方式',
          type: 'error',
          center: true,
          showClose: true
      });
      this.isCollapse = !this.isCollapse;
    },
    logout() {
       this.$confirm('即将退出本系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    }
  },
  components: {
    'w-menu': wMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header, .el-footer {
    background-color: #485057;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .w-logo {
    text-align: center;
    font-size: 23px;
    padding-left: 20px;
    padding-right: 50px;
  }

  .w-logo-img {
    text-align: center;
    align-self: center;
    padding-left: 0px;
    width: 170px;
  }

  .layout-nav-img{
    width:30px;
    height:30px;
    margin-right:10px;
    border-radius:50%;
    background-color: #485057;
    display: inline-block;
  }
  .w-button {
    padding-left: 200px;
  }
  
  .w-a-notextline {
    text-decoration-line: none;
  }

  .w-left-menu .el-menu-vertical{
    height: 500px;
    background-color: rgb(84, 92, 100);
  }

  /* .w-main-background {
    background-color: #0c7fd1;
  } */
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 500px;
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    /* line-height: 500px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .larry-side-menu {
    position: absolute;
    cursor: pointer;
    z-index: 19940201;
    left: 190px;
    color: #fff;
    text-align: center;
    width: 30px;
    height: 30px;
    background-color: #29e;
    line-height: 30px;
    /* top: 40%; */
    bottom: 20%;
}

.larry-side-menu:hover {
    background-color: #0c7fd1;
}
</style>
