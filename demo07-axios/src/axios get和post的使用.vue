<script setup>
import axios from 'axios'
import {onMounted, reactive, ref} from "vue";

// async function getLoveWords() {
//   return await axios.post("https://api.uomg.com/api/rand.qinghua",{},{params:{format:'json'},headers:{// 请求头
//       'Accept' : 'application/json, text/plain, text/html,*/*',
//       'X-Requested-With': 'XMLHttpRequest'
//     }})
// }



async function getLoveWords() {
  return await axios.get("https://api.uomg.com/api/rand.qinghua")
}

let jsonData =reactive({code:1,content:'我努力不是为了你而是因为你'})

let message = ref("")
 let getLoveMessage =  async () =>{
   let {data} = await getLoveWords()

   console.log(data)
   // Object.assign(message,getData)
   Object.assign(jsonData,data)
   message = data

}
onMounted(()=> {
  getLoveMessage()
})

</script>

<template>
  <div>
  <h1>你好</h1>
    message:{{message}}
    <hr>
    jsonData: {{jsonData}}
  </div>
</template>

<style scoped>

</style>
