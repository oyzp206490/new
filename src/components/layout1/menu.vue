<template>
  <div>
    <Menu active-name="1-2" theme="dark" width="auto" :class="classmenu">
      <Input v-model="value" placeholder="搜索" style="width: 100%" />

      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          <span>Item 1</span>
        </template>
        <MenuItem name="1-1">Option 1</MenuItem>
        <MenuItem name="1-2">Option 2</MenuItem>
        <MenuItem name="1-3">Option 3</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          <span>Item 2</span>
        </template>
        <MenuItem name="2-1">Option 1</MenuItem>
        <MenuItem name="2-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          <span>Item 3</span>
        </template>
        <MenuItem name="3-1">Option 1</MenuItem>
        <MenuItem name="3-2">Option 2</MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {
  props: ["classmenu"],
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="less" >
.collapsed-menu span {
  display: none;
}
.collapsed-menu .ivu-menu-submenu-title-icon {
  display: none;
}
.collapsed-menu .ivu-menu {
  display: none;
  width: 160px;
  transition: none;
}
.collapsed-menu .ivu-menu-submenu-title-icon {
  display: none;
}

.collapsed-menu .ivu-menu-submenu {
  position: relative;
}
.collapsed-menu .ivu-menu-submenu:hover .ivu-menu-submenu-title {
  background-color: #2d8cf0 !important;
}
.collapsed-menu .ivu-menu-submenu:hover .ivu-menu {
  position: absolute;
  display: block !important;
  left: 80px;
  top: 0;
  background-color: #515a6e;
}

.collapsed-menu .ivu-menu-item:hover {
  background-color: #2d8cf0 !important;
}
</style>