<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  //  vuex的刷新页面丢失问题处理
  mounted() {
    //   var store = require("store");
    //   // console.log(store)
    //   //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("storedata")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("storedata"))
        )
      );
    }
    //   //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(
        "storedata",
        JSON.stringify(this.$store.state.val)
      );
    });
    //   // 兼容iphone手机
    //   window.addEventListener("pagehide", () => {
    //     sessionStorage.setItem("storedata", JSON.stringify(this.$store.state));
    //   });
  },
};
</script>

<style>
html ,body{
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
   height: 100%;
  color: #2c3e50;
  /* margin-top: 60px;   */
}
</style>
