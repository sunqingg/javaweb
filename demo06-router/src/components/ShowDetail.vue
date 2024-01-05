<script setup>

import {useRoute} from "vue-router";
import {onMounted, onUpdated, ref} from "vue";

let route =  useRoute()
let languageName = ref('')
let languageId = ref(0)
console.log(  route.params.id)
console.log(  route.params.language)


onMounted(() =>{

  // languageId.value=route.query.id
  // languageName.value=route.query.language
  languageId.value=route.params.id
  languageName.value=route.params.language
  console.log(languageId.value)
  console.log(languageName.value)

})

</script>

<template>
<div>
<h1>我是showDetail页面</h1>
  我是detail {{languageId}}- {{languageName}}
</div>
</template>

<style scoped>

</style>
