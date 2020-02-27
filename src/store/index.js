import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import repo from "./modules/repo";
import inspection from "./modules/commit";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        auth,
        repo,
        inspection
    },
    strict: debug
});
