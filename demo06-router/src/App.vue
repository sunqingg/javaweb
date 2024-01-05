<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import ShowDetail from "./components/ShowDetail.vue";

let router = useRouter()
let routePath = ref('')
let showList = () =>{
  // router.push({path:"/list"})
  router.push('/list')
}

let showDetail = (id,language) =>{
  // router.push({path:"/list"})
  // router.push(`showDetail/${id}/${language}`)
  // router.push(`showDetail/${id}/${language}`)
  //  name
  // router.push({name:"showDetail",params:{id:id,language:language}})
    // {
    //   path:"/showDetail/:id/:language",
    //       name:'showDetail',
    //     component:ShowDetail
    // },

  //path
  router.push({path:"/showDetail",query:{id:id,language:language}})
    // {
    //   path:"/showDetail",
    //       component:ShowDetail
    // }
  // router.push({path:"/showDetail",query:{id:id,language:language}})
}
</script>

<template>
  <div>
    <button @click="showList()">showList</button>
    <br>
    <button @click="showDetail(1,'java')">showDetail</button>

    <br>
 <router-link to="/">home页</router-link>
    <br>
    <router-link to="/list">list页</router-link>
    <br>
    <router-link to="/update">update页</router-link>
    <br>
    <router-link to="/add">add页</router-link>

  <router-view></router-view>
    <hr>
    分割线
    <hr>
    <router-view name="homeView"></router-view>

    ShowDetail： <router-view name="showDetail"></router-view>

  </div>
</template>

<style scoped>

</style>
