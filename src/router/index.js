import Vue from "vue";
import Router from "vue-router";
import RepoList from "../components/repo-list";
import UserList from "../components/user-list";
import Login from "../components/login";
import store from "../store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/users");
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/login");
};

export default new Router({
    base: "/sherlock",
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "repos",
        },
        {
            path: "/repos",
            name: "RepoList",
            component: RepoList,
            beforeEnter: ifAuthenticated
        },
        {
            path: "/users",
            name: "UserList",
            component: UserList,
            beforeEnter: ifAuthenticated
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            beforeEnter: ifNotAuthenticated
        }
    ]
});
