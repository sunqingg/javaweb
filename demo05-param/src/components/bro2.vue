<script setup>
import {ref} from "vue";

let emites = defineEmits(['add','sub'])
let data = ref(10)

function sendMsgToParent() {
  emites('add',"我要加" + data.value)
  emites('sub',"我要减" + data.value)
  data.value++
  console.log(data.value)
}


defineProps({
  sendMsg:String
})
</script>


<template>
<div>
  <hr>
  bro2
  <br>
  <button @click="sendMsgToParent">发送消息给父组件</button>
  <hr>
  {{sendMsg}}
  bro2
  <br>
  <hr>
</div>


</template>

<style scoped>

</style>
