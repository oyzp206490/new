<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">后台管理系统</div>
      <div class="nav_left">
        <template>
          <Poptip trigger="hover" style="float: right">
            <div>
              <Avatar style="color: #f56a00; background-color: #fde3cf"
                >U</Avatar
              ><span>用户名</span>
            </div>
            <div slot="content" style="background: #000">
              <a src="#" class="nav_avatar">
                <Icon type="ios-log-out" class="nav_img" />修改密码</a
              >
              <a src="#" class="nav_avatar">
                <Icon type="ios-lock" class="nav_img" />退出登录</a
              >
              <a src="#" class="nav_avatar">
                <Icon type="ios-cog-outline" class="nav_img" />主题设置</a
              >
            </div>
          </Poptip>
        </template>
      </div>
    </Menu>
  </Header>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.layout-logo {
  width: 100px;
  color: #fff;
  float: left;
}

.nav_left {
  width: 520px;
  float: right;
  color: #fff;
}
.nav_img {
  margin-right: 30px;
  vertical-align: middle;
}
.nav_avatar {
  display: block;
  border: 1px solid #cccccc;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.nav_left /deep/ .ivu-poptip-body {
  padding: 0px !important;
}
</style>