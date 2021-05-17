<template>
  <div class="boy">
    <div class="box">
      <div class="tab-bar">
        <ul>
          <li :class="{ lis: login }" @mouseover="logn(1)">我要登录</li>
          <li :class="{ lis: regis }" @mouseover="logn(2)">我要注册</li>
        </ul>
        <!-- <div>我要登录</div>
        <div>我要注册</div> -->
      </div>
      <p class="title">{{ title }}</p>
      <div class="from">
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          class="boxd"
        >
          <FormItem prop="loginame">
            <div class="use">
              <Input
                type="text"
                v-model="formInline.loginame"
                placeholder="Username"
                @on-change="enter"
                @on-focus="focus"
                @on-blur="blur"
                clearable
              >
                <!-- @mouseleave="leave" -->
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>

              <div class="users" v-if="show">
                <ul>
                  <li
                    @mousedown="query(item)"
                    v-for="(item, index) in fSearch"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </FormItem>

          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="密码"
              clearable
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem v-if="login">
            <Checkbox v-model="username">记住用户名</Checkbox><br />
            <Checkbox v-model="single" @on-change="check">自动登录</Checkbox>
          </FormItem>
          <FormItem>
            <Button long type="primary" @click="handleSubmit('formInline')">{{
              login ? "登录" : "注册"
            }}</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "../../requey/api";
import local from '../../local/index'
export default {
  data() {
    return {
      formInline: {
        loginame: "admin",
        password: "14551",
      },
      single: false,
      login: true,
      username: false,
      regis: false,
      show: false,
      user: [],
      ary: [],
      hide: true,
      title: "后台管理登录",
      ruleInline: {
        loginame: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            type: "string",
            min: 4,
            message: "密码长度为6",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {
    // document.addEventListener('click', this.handleWinFocus);
    this.user = localStorage.getItem("userName")
      ? JSON.parse(localStorage.getItem("userName"))
      : [];
  },
  computed: {
    // 模糊查询
    fSearch() {
      if (this.formInline.user) {
        return this.user.filter((value) => {
          //过滤数组元素
          return value.includes(this.formInline.user); //如果包含字符返回true
        });
      } else {
        return this.user;
      }
    },
  },
  created() {
    var _self = this;
    document.onkeydown = function (e) {
      var key = window.event.keyCode;
      if (key == 13 || key == 100) {
        _self.handleSubmit("formInline");

      }
    };
  },
  methods: {
    // 移入
    enter() {
      this.show = true;
    },
    focus() {
      this.show = true;
    },
    blur() {
      this.show = false;
    },
    // 选择数据
    query(val) {
      this.show = false;
      this.formInline.user = val;
    },
    check(val) {
      if (val) {
        // this.$nextTick(() => {
        //   if (localStorage.getItem("Authorization")) {
        //     this.$router.push("/");
        //   }
        // });
      }
    },
    logn(val) {
      if (val === 1) {
        this.login = true;
        this.regis = false;
        this.title = "后台管理登录";
      } else if (val === 2) {
        this.login = false;
        this.regis = true;
        this.title = "后台管理注册";
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.username) {
            let user = localStorage.getItem("userName")
              ? JSON.parse(localStorage.getItem("userName"))
              : [];
            user.push(this.formInline.loginame);
            user = [...new Set(user)];
            localStorage.setItem("userName", JSON.stringify(user));
          }
          this.$store
            .dispatch("logint", this.formInline)
            .then(res=> {
            
                this.$router.push({ path: this.redirect || "/" });
             
            })
           
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
ul {
  list-style-type: none;

  li {
    cursor: pointer;
    padding: 10px;
  }
  :hover {
    background-color: #cccccc;
  }
}
.users {
  width: 268px;
  height: auto;
  max-height: 160px;
  min-height: 0px;
  overflow: auto;
  background-color: cornsilk;
  position: absolute;
  left: 30px;
  z-index: 99;
}
.boy {
  width: 100%;
  height: 100%;
  background-image: url("../../image/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  /deep/ .ivu-form-item-required {
    height: 35px;
  }
  .box {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: darkgrey;
    background-color: rgba(255, 255, 255, 0.3);
    .tab-bar {
      height: 50px;
      ul {
        padding: 0px;
        text-align: center;
        line-height: 50px;
        font-size: 15px;
        display: flex;
        li {
          flex: 1;
          // border: 1px solid;
          background-color: darkgray;
          list-style-type: none;
          cursor: pointer;
          padding: 0px;
        }
        .lis {
          background-color: darkgrey;
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }

    .title {
      text-align: center;
      margin-top: 10px;
      font-size: 30px;
    }
    .from {
      width: 300px;
      height: 300px;
      //   border: 1px solid;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .boxd {
        margin-top: 70px;
      }
    }
  }
}
</style>