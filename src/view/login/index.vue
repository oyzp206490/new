<template>
  <div class="boy">
    <div class="box">
      <p class="title">后台管理登录</p>
      <div class="from">
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          class="boxd"
        >
          <FormItem prop="user">
            <Input
              type="text"
              v-model="formInline.user"
              placeholder="用户"
              clearable
            >
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
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
            <a style='float:right;color:red' >用户注册</a>
          </FormItem>
          <FormItem>
            <Checkbox v-model="single">记住密码</Checkbox><br />
            <Checkbox v-model="single">自动登录</Checkbox>
          </FormItem>
          <FormItem>
            <Button long type="primary" @click="handleSubmit('formInline')"
              >Signin</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      single:'',
      ruleInline: {
        user: [
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
            min: 6,
            message: "密码长度为6",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
    handleSubmit(name){
        this.$refs[name].validate((valid) => {
            if(valid){
                this.$router.push('/')
            }else {
                this.$Message.error('Fail!');
            }
        })
    }  
  }
};
</script>
<style lang="less" scoped>
.boy {
  width: 100%;
  height: 100%;
  background-image: url("../../image/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
 /deep/ .ivu-form-item-required{
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

    .title {
      text-align: center;
      margin-top: 57px;
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