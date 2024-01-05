<script setup>

import {computed, reactive, ref, watch} from "vue";

let condition = ref(true)

let person = reactive([
  {
    name:"q",
    age:10
  },
  {
    name:"w",
    age:20
  },
  {
    name:"e",
    age:30
  }
])

let items =reactive([
  {
    id:'item1',
    message:"薯片"
  },
  {
    id:'item2',
    message:"可乐"
  }
])

let hbs = ref([]); //装爱好的值
let user = reactive({username:null,password:null,introduce:null,pro:null})

function login(){
  alert(hbs.value);
  alert(JSON.stringify(user));
}

let author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
let ComputedHasBooks = computed(() => {
      console.log("publishedBooksMessage")
      return author.books.length > 0 ? '是' : '否'
    }
)

let hasBooks = () =>  author.books.length > 0 ? '是' : '否'

// 监听
watch(condition,(value, oldValue)=>{
  console.log(`值由${oldValue}变为了${value}`)
})

// watch(()=>user.username,(value, oldValue) =>{
//   console.log(`旧值: ${oldValue}`)
//   console.log(`新值: ${value}`)
// })
watch(()=>user,(value, oldValue) =>{
  console.log(`旧值: ${oldValue.username}`)
  console.log(`新值: ${value.username}`)
},{deep:true})

</script>

<template>
  <div>
    <h1 v-if="condition">Vue is awesome!</h1>
    <div v-if="condition" style="background-color: red" ></div>
    <div v-else style="background-color: green" ></div>
    <button type="reset" @click="condition =!condition"> 点我</button>


    <ol>
      <li v-for="people in person">
        {{people.name}}
      </li>
    </ol>
    <hr>
    账号： <input type="text" placeholder="请输入账号！" v-model="user.username"> <br>
    密码： <input type="text" placeholder="请输入账号！" v-model="user.password"> <br>

    爱好：<input type="checkbox" name="hbs" id="" value="吃" v-model="hbs">
          <input type="checkbox" name="hbs" id="" value="喝" v-model="hbs">
          <input type="checkbox" name="hbs" id="" value="玩" v-model="hbs">
          <input type="checkbox" name="hbs" id="" value="乐" v-model="hbs">
    <br>
    简介:<textarea v-model="user.introduce"></textarea>
    籍贯:
    <select v-model="user.pro">
      <option value="1">黑</option>
      <option value="2">吉</option>
      <option value="3">辽</option>
      <option value="4">京</option>
      <option value="5">津</option>
      <option value="6">冀</option>
    </select>
    <br>
    <button @click="login()">登录</button>
    <button @click="user.$reset">重置</button>
    <hr>
    显示爱好:{{ hbs }}
    <hr>
    显示用户信息:{{ user }}

    <hr>
    <p v-text="author.name"> </p>
    <span >{{author.books.length > 0 ? '是' : '否'}}</span>
    <br>
    {{hasBooks()}}
    有书吗 {{ComputedHasBooks}}
  </div>

</template>

<style scoped>
div {
  width:200px;
  height: 100px;
  //float: right;
  margin: 0 auto ;

}
</style>
