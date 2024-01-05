import {createRouter,createWebHashHistory} from 'vue-router'

import Home from "../components/Home.vue";
import List from "../components/List.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
import ShowDetail from "../components/ShowDetail.vue";

let router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            components:{
                default:Home,
                homeView:Home
            }
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/list",
            component:List
        },
        {
            path:"/add",
            component:Add
        },
        {
            path:"/update",
            component:Update
        },
        {
            path:"/showDetail/:id/:language",
            name:'showDetail',
            component:ShowDetail
        },
        // {
        //     path:"/showDetail",
        //     components:{
        //         showDetail:ShowDetail
        //     }
        // }
    ]
})

export default router