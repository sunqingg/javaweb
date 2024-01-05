<script setup>
import {reactive, ref, toRef, toRefs} from 'vue'
let num = ref(0)

let num1 = 0

let person = reactive({
  name:"",
  age: 1,
  gender:""

})
function desSumDef() {
  num.value--
  console.log(num.value)
}
function desnum() {
  num1--
  console.log(num1)
}


function sumAge() {
  person.age =  person.age * 2
}
let name1 = toRef(person,"name")

</script>



<template>

  <div>
    <button type="reset" @click="num++">增加</button>
    {{num}}
    <button type="reset" @click="desSumDef()">减少</button>

    <button type="reset" @click="num1++">增加</button>
    {{num1}}
<!--    // 函数名可以不加()-->
    <button type="reset" @click=desnum>减少</button>
    <hr>
    年龄<input type="text" v-text="person.age">
    <button type="reset" @click="sumAge()">年龄加倍</button>
    <br>
    当前年龄: {{person.age}}<br>
    姓名<input type="text" v-model="person.name">
    <br>
    当前姓名: {{person.name}}
    <br>
<!--    toRefs 实际和原对象还是一个内存地址-->
    <input type="text" v-model="name1">
    <br>
    {{name1}}

  </div>
  分隔符
  <hr>

</template>

<style scoped>


</style>
