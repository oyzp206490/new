
<template>
  <div class="layout">
    <Select v-model="model1" style="width: 200px" @on-change="setting">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>
    {{ $t('welcome') }}
    {{ $t('hello') }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      model1: "zh",
      cityList: [
        {
          value: "zh",
          label: "中文",
        },
        {
          value: "en",
          label: "英文",
        },
      ],
      // isCollapsed: false,
      // value: "",
    };
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    setting(v) {
      this.$i18n.locale = v;
      localStorage.setItem('locale', this.$i18n.locale)
      console.log(this.$i18n.locale);
    },
  },
  // computed: {
  //   menuitemClasses: function () {
  //     return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
  //   },
  // },
};
</script>
<style lang="less" scoped>
// .crumb {
//   width: 100%;
//   height: 40px;
//   background: #fff;
//   // border: 1px solid;
// }
</style>