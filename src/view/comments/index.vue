<template>
  <div>
    <div style="border-bottom: 1px solid;height:40px">
      <RadioGroup v-model="showType" type="button">
        <Radio label="rear">后台展示</Radio>
        <Radio label="front">前台显示</Radio>
      </RadioGroup>

      <div style="float: right">
        <div>
          <Button type="text" @click="hide">隐藏</Button>
          <Button type="text" @click="substitute">匿名</Button>
          <!--<Button type="text">恢复</Button>-->
          <Button type="text" @click="submit">{{
            previewLock ? "解锁" : "锁定"
          }}</Button>
          <Button type="text">反馈</Button>
        </div>
      </div>
    </div>
    
    <div class="left">

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      showType: "rear",
    };
  },
};
</script>
<style lang="less" scoped>
.left{
    // margin-top: 20px;
    width: 80%;
    border-right: 1px solid;
    height: 740px;
}
</style>
