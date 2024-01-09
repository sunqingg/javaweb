<script setup>

import {DefinePerson } from "./components/store/store.js";
import {reactive} from "vue";

console.log(DefinePerson)
let person = DefinePerson()

// 先是非响应式
let test = {
  hobbies: ['唱', '跳','rap']
}

//改为响应式数据
// let test = reactive({
//   hobbies: ['唱', '跳','rap']
// })

function f1() {
  test.hobbies.push("跑步")
  console.log(test.hobbies)

}

</script>

<template>
  <h1>operate视图,用户操作Pinia中的数据</h1>
<!--  person默认就是响应式数据?-->
  请输入姓名:<input type="text" v-model="person.username"> <br>
  请输入年龄:<input type="text" v-model="person.age"> <br>
  请增加爱好:
  <input type="checkbox" value="吃饭"  v-model="person.hobbies"> 吃饭
  <input type="checkbox" value="睡觉"  v-model="person.hobbies"> 睡觉
  <input type="checkbox" value="打豆豆"  v-model="person.hobbies"> 打豆豆 <br>
  <ul>
    <li v-for="hobbie in person.hobbies" v-text="hobbie"></li>
  </ul>
<!--  非响应式数据-->
<!--  <ul>-->
<!--    <li v-for="hobbiesX in test.hobbies" v-text="hobbiesX"></li>-->
<!--    <button  @click=f1()>按钮</button>-->
<!--  </ul>-->


</template>

<style scoped>

</style>
