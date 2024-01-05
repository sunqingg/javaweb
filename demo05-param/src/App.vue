<script setup>
import {reactive, ref} from "vue";

let message = ref("我是father")
let age = ref(40)

import bro1 from './components/bro1.vue'
import bro2 from './components/bro2.vue'

let pdata = ref('')
const padd = (data) => {
  console.log('2222');
  pdata.value =data;
}
const receiveBro = ref("")
let recv = (data) =>{
  receiveBro.value = data
}

</script>

<template>
  <input type="text" v-model="message"><br>
  <input type="text" v-model="age">

  <h1>father</h1>
<!--  // bro1 调用几次在页面展示几次,并且每次都可以决定是否传对应的值-->

  <bro1 :message="message" :age="age"></bro1>
<!--<bro1></bro1>-->
  <br>
  <hr>
  <bro2 @add="padd"></bro2>
  <br>
  {{pdata}}

  <hr>
<!--  从bro1 接受数据，并通过自己的recv变量通过一个匿名函数将数据转移到receiveBro-->
  <bro1 @show="recv"></bro1>
  {{receiveBro}}
<!--  发送数据到bro2-->
  <bro2 :sendMsg="receiveBro"></bro2>
</template>

<style scoped>

</style>
