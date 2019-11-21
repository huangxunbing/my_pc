<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="$route.meta.A"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="selectHan"
        >
          <el-menu-item index="index">首页</el-menu-item>
          <el-menu-item index="caigou">采购管理</el-menu-item>
          <el-menu-item index="caiwu">财务管理</el-menu-item>
        </el-menu>
      </el-header>
      <router-view></router-view>
      <el-footer class="fox">白给公司</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.meta.A);
  },
  methods: {
    selectHan(v) {
      this.$router.push({
        name: v
      });
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
header {
  padding: 0 !important;
  margin: 0;
}
.fox {
  text-align: center;
}
</style>