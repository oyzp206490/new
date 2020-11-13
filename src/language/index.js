import Vue from 'vue';
import iView from 'iview';
import VueI18n from 'vue-i18n';
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import US from './en-US';
import CN from './zh-CN'

Vue.use(VueI18n);
Vue.locale = () => { };

const messages = {
    en: Object.assign(US, en),  //将自己的英文包和iview提供的结合
    zh: Object.assign(CN, zh)  //将自己的中文包和iview提供的结合
};

const i18n = new VueI18n({
    locale: localStorage.getItem("locale") || 'en',  // 设置语言,如果本地存储了则用本地的,没有则默认 'en'
    messages  // set locale messages
});

Vue.use(iView, {
    i18n: (key, value) => i18n.t(key, value)
})
//上面这个比较重要 按照官网提供的方法 new Vue({ i18n }).$mount('#app'); 运行会出错 提示无法找到  _t 属性。 按照上述方法配置可以解决此问题(网上找的方法,亲测没问题)

//将i18n 导出，在main.js 的 new Vue({}) 中需要配置
export default i18n