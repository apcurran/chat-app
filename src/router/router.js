import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Chatroom from "@/components/Chatroom";

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/chatroom",
            name: "Chatroom",
            component: Chatroom,
            props: true
        }
    ]

});