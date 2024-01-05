<script setup type="module">
// import {defineProps} from 'vue'

import {ref} from "vue";

defineProps(
    {
      message: String,
      age: Number
    }
)
let username = ref("孙庆")
let emits =  defineEmits(['show'])

emits('show',"我是bro1: " +username.value)
function bro1SendMsg() {

}

</script>

<template>
  <hr>
  bro1
  <br>
  message:<input type="text" v-bind:value="message"><br>
  age: <input type="text" :value="age"><br>
  {{message}}

<!--  <button type="reset" @click="bro1SendMsg()">发送数据</button>-->
  <br>
  bro1
  <hr>
</template>

<style scoped>

</style>
