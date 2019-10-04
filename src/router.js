import Vue from 'vue';
import VueRouter from 'vue-router';

import AuthLayout from "@/layout/AuthLayout"
import DashboardLayout from "@/layout/DashboardLayout"

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    linkExactActiveClass: "active",
    routes: [{
            path: "/",
            redirect: "default",
            component: AuthLayout,
            children: [{
                    path: "/",
                    name: "main",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/Main.vue")
                },
                {
                    path: "/login",
                    name: "login",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/Login.vue")
                },
                {
                    path: "/register",
                    name: "register",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/Register.vue")
                },
                {
                    path: "/hello",
                    name: "hello",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./components/HelloWorld.vue")
                },
            ]
        },
        {
            path: "/",
            component: DashboardLayout,
            children: [{
                    path: "/dashboard",
                    name: "dashboard",
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/dashboard/Dashboard.vue")
                },
                {
                    path: "/mypage",
                    name: "mypage",
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/dashboard/Mypage.vue")
                },
            ]
        },
    ]
});