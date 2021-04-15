import vue from 'vue'
import Router from 'vue-router'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import Body  from './components/body/Body.vue'
import Vue from 'vue/types/umd'
import { Component } from 'vue-property-decorator';



Vue.use(Router)



    const routes= [{

        path:'/',
        name:'header',
        component: Header
    },

    {
        path:'/',
        name:'footer',
        component: Footer
        

    },

    {
        path:'/',
        name:'body',
        Component: Body

        
    }
];
const router = new Router({
    mode: "history",
    routes
});

    export default new Router;

