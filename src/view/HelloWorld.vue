
<template>
  <div class="layout">
    <Layout>
      <Header></Header>
      <!-- <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav"></div>
        </Menu>
      </Header> -->
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
          <div class="content">111</div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import header from "../components/layout1/haeder";
import menu from "../components/layout1/menu";
import crumb from "../components/layout1/crumb";
export default {
  components: {
    Header: header,
    "Sider-bar": menu,
    "crumb-bar": crumb,
  },
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
};
</script>
<style lang="less" scoped>
.crumb {
  width: 100%;
  height: 40px;
  background: #fff;
  // border: 1px solid;
}

</style>