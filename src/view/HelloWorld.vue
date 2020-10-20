<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    let [a,b,c] = [5,9,10]
    console.log(a,b,c)
    // function f1() {
    //   var n = 5;
    //   if (true) {
    //     var n = 10;
    //   }
    //   console.log(n); // 5
    // }f1()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
