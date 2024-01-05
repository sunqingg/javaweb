<script setup>



import {ref} from "vue"
alert("开始啦!!!")
const name = "sunqing"
const button = "按钮1"
let num = ref(0)
function button1() {
  num.value++
}
function button2() {
  num.value--
}
const buttonText1 = "增加"
const buttonText2 = "减少"

function preventD(event) {
  num.value++
  event.preventDefault()
  // 显示点击对象的text属性,典型是双标签
  console.log(event.target.text)
}
function testChange(event){
  console.log("内容改变")
  //   // 显示点击对象的value属性,典型是 input 这种带value属性的.
  console.log(event.target.value);
}

</script>

<template>
  <input type="text" name="" id="" :value="name">
  <button type="submit" v-text="button" @click="button1()"></button>
  <button type="reset"  @click.once="button1()">{{buttonText1}}</button>
  <a href="">{{num}}</a>
  <button type="reset" v-text="buttonText2" v-on:click="button2()"></button><br>
  <button @click.once="num++">addOnce</button> <br>
  <a href="http://www.atguigu.com" target="_blank" @click.prevent="num++">prevent</a> <br>
  <a href="http://www.baidu.com" @click="preventD">阻止跳转</a><br>

  <input type="text"  v-on:change="testChange">

</template>

<style scoped>

</style>
