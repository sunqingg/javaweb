import {createRouter, createWebHashHistory} from "vue-router";

import Login from "../components/Login.vue";
import Regist from "../components/Regist.vue";
import ShowSchedule from "../components/ShowSchedule.vue";

import pinia from "../pinia.js";
import{ defineUser}  from '../store/userStore.js'

let sysUser = defineUser(pinia)

let route =  createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Login
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/showSchedule",
            component:ShowSchedule
        },
        {
            path:"/regist",
            component:Regist
        },
        {
            path:"/test",
            component:ShowSchedule
        },
    ]
})

// router.beforeEach((to,from,next)=>{
//     if(to.path == '/showSchedule'){
//         // 登陆过放行
//         // 没登录 回到登录页
//         if(sysUser.username == ''){
//             next("/login")
//         }else{
//             next()
//         }
//     }else{
//         next()
//     }
//
// })


route.beforeEach((to, from, next) => {
    if (to.path != "/login" && sysUser.username == ''){
        route.push("/login")
    }else {
        next()
    }
})

export default route