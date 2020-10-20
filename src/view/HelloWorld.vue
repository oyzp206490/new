<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <header></header>
      <!-- <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav"></div>
        </Menu>
      </Header> -->
    </Layout>
    <Layout :style="{ minHeight: '150vh' }">
      <Sider collapsible :collapsed-width="100" v-model="isCollapsed">
        <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
        >
          <Input
            v-model="value"
            placeholder="搜索"
            style="width: 100%"
          />

          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Content :style="{ padding: '0 16px 16px' }">
          <Breadcrumb :style="{ margin: '16px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="height: 600px">Content</div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import header from '../components/layout1/haeder'
export default {
  components:{
    'header':header
  },
  data() {
    return {
      isCollapsed: false,
      value:''
    };
  },
  computed: {
    menuitemClasses: function () {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
};
</script>
