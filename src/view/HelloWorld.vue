
<template>
  <div class="layout">
       首页
  </div>
</template>
<script>

export default {

  data() {
    return {
      // isCollapsed: false,
      // value: "",
    };
  },
  mounted(){
    console.log(this.$route)
  }
  // computed: {
  //   menuitemClasses: function () {
  //     return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
  //   },
  // },
};
</script>
<style lang="less" scoped>
// .crumb {
//   width: 100%;
//   height: 40px;
//   background: #fff;
//   // border: 1px solid;
// }
</style>