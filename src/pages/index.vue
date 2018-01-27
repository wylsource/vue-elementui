<template>
  <div>
        <el-tabs style="height: 200px;">
                <el-tab-pane label="用户管理">
                    <el-breadcrumb separator="/" class="w-breadcrumb-background">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>

                    <el-table
                        ref="multipleTable"
                        tooltip-effect="dark"
                        @selection-change="handleSelectionChange"
                        :data="tableData2"
                        height="340"
                        style="width: 180"
                        :row-class-name="tableRowClassName"
                        >
                        <el-table-column
                        type="selection"
                        width="50"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="date"
                        label="日期"
                        width="180"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="姓名"
                        width="180"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="地址"
                        align="center"
                        >
                        </el-table-column>
                    </el-table>
                    <div class="block" style="padding-top: 10px">
                        <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        
  </div>
</template>


<script>
export default {
  data () {
      return {
          tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
        ],
        multipleSelection: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
  },
  methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>

<style scoped>

    .w-breadcrumb-background {
        background-color: #f2f2f2;
        height: 30px;
        text-align: center;
        padding-top: 10px;
        padding-left: 5px;
    }
     .warning-row {
        background: rgb(158, 108, 16);
    }

     .success-row {
        background: #4bbb0e;
    }

</style>
