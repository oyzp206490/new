<template>
  <Breadcrumb class="cented">
    <BreadcrumbItem v-for="(item, index) in levelList" :key="index" :to='item'>
      {{ item.meta.title }}</BreadcrumbItem
    >
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      levelList: [],
    };
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    // isHome(route) {
    //   return route.name === "/home";
    // },

    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name); // this.$route.matched 可以获取到一个数组，包含当前路由的所有嵌套路径片段的路由记录
      const first = matched[0];
      if (first && first.name !== "首页") {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      this.levelList = matched;
      console.log(this.levelList)
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
};
</script>
<style lang="less" scoped>
.cented {
  line-height: 40px;
  padding-left: 20px;
}
</style>