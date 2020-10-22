<template>
  <div>
    <Menu active-name="home" theme="dark" width="auto" :class="classmenu">
      <Input v-model="value" placeholder="搜索" style="width: 100%" />

      <template v-for="(menuItem, menuIndex) in menuList">
        <MenuItem
          v-if="!menuItem.children || menuItem.children.length == 0"
          :key="menuIndex"
          :name="menuItem.value"
          class="menu"
          :to="menuItem.to"
        >
          <Icon :type="menuItem.icon" />
          <span>{{ menuItem.name }}</span>
        </MenuItem>
        <Submenu v-else :name="menuItem.value">
          <template slot="title" class="menu">
            <Icon :type="menuItem.icon"></Icon>
            <span>{{ menuItem.name }}</span>
          </template>
          <MenuItem
            v-for="(item, index) in menuItem.children"
            :key="index"
            :name="item.value"
            :to="item.to"
          >
            {{ item.name }}</MenuItem
          >
        </Submenu>
      </template>
    </Menu>
  </div>
</template>
<script>
import { menuList } from "@/ulits/set";
export default {
  props: ["classmenu"],
  data() {
    return {
      value: "",
      menuList: [],
    };
  },
  mounted() {
    this.menuList = menuList;
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