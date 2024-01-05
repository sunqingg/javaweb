<script setup>
  import {ref} from "vue"
  alert("初次尝试")
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


</script>

<template>
  <input type="text" name="" id="" :value="name">
  <button type="submit" v-text="button" @click="button1()"></button>
  <button type="reset"  @click.once="button1()">{{buttonText1}}</button>
  <a href="">{{num}}</a>
  <button type="reset" v-text="buttonText2" v-on:click="button2()"></button><br>
  <button @click.once="num++">addOnce</button> <br>
</template>

<style scoped>

</style>
