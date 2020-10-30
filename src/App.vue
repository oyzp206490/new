<template>
  <div id="app">
    <template v-if="$route.path === '/login'">
      <router-view />
    </template>
    <div class="layout" v-else>
      <Layout>
        <Header></Header>
      </Layout>
      <Layout :style="{ minHeight: '90vh' }">
        <Sider
          collapsible
          :collapsed-width="80"
          :width="320"
          v-model="isCollapsed"
        >
          <Sider-bar :classmenu="menuitemClasses"></Sider-bar>
        </Sider>
        <Layout>
          <div class="crumb">
            <crumb-bar></crumb-bar>
          </div>
          <Content :style="{ padding: '24px' }">
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import header from "./components/layout1/haeder";
import menu from "./components/layout1/menu";
import crumb from "./components/layout1/crumb";
export default {
  components: {
    Header: header,
    "Sider-bar": menu,
    "crumb-bar": crumb,
  },
  name: "App",
  data() {
    return {
      isCollapsed: false,
      value: "",
    };
  },
  computed: {
    menuitemClasses: function () {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  //  vuex的刷新页面丢失问题处理
  mounted() {
    console.log(this.$route);
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
html,
body {
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
.crumb {
  width: 100%;
  height: 40px;
  background: #fff;
}
</style>
