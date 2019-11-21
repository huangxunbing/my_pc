<template>
  <div class="side_box">
      <div class="side">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
           <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
           <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
           <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
    </div>
    <div class="content_box">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      A : '',
      B : '',
      conmens: {
        'caigou':[
          {'k':'jinhuo','v':'进货'},
          {'k':'richang','v':'日常'},
          {'k':'tuihuo','v':'退货'},
        ],
        'caiwu':[
          {'k':'pzgl','v':'凭证管理'},
          {'k':'zxyw','v':'转项业务'},
        ]
      },
    }
  },
  created(){
    this.A = this.$route.meta.A;
    this.B = this.$route.meta.B;
  },
  computed:{
    nowconmens(){
      return this.conmens[this.A]
    }
  }
};
</script>

<style lang="less" scoped>
.side_box{
    position: relative;
    padding-left: 270px;
    .side{
        position: absolute;
        left: 0;
        top: 0;
        width: 260px;
        position: absolute;
    }
    .content_box{
        min-height: 500px;
    }
}
</style>