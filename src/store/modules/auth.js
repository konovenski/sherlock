import {
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    AUTH_REQUEST
} from "../actions/auth";

import axios from "axios";


const state = {
    credentials: JSON.parse(localStorage.getItem("credentials")) || "",
};

const getters = {
    isAuthenticated: state => !!state.credentials,
    credentials: state => state.credentials
};

const actions = {
    [AUTH_REQUEST]: ({commit}, user) => {
        return new Promise((resolve, reject) => {
            axios
                .get("https://api.bitbucket.org/2.0/user", {
                    auth: user
                })
                .then(function() {
                    localStorage.setItem("credentials", JSON.stringify(user));
                    commit(AUTH_SUCCESS, user);
                    resolve();
                })
                .catch(err => {
                    localStorage.removeItem("credentials");
                    reject(err);
                });
        });
    },

    [AUTH_LOGOUT]: ({commit}) => {
        return new Promise(resolve => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem("credentials");
            resolve();
        });
    }
};

const mutations = {
    [AUTH_SUCCESS]: (state, credentials) => {
        state.credentials = credentials;
    },
    [AUTH_LOGOUT]: state => {
        state.credentials = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};