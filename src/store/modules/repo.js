import {
    REPOS_SUCCESS,
    REPOS_REQUEST,
    REPOS_CLEANUP
} from "../actions/repo";

import axios from "axios";


const state = {
    repos: JSON.parse(localStorage.getItem("repos")) || "",
};

const getters = {
    isUploaded: state => !!state.repos,
    repos: state => state.repos,
};

function parseRepos(response) {
    return response.data.values.map(element => element.repository);
}


const actions = {
    [REPOS_REQUEST]: ({commit}, user) => {
        return new Promise((resolve, reject) => {
            axios
                .get("https://api.bitbucket.org/2.0/user/permissions/repositories?pagelen=100", {
                    auth: user
                })
                .then(function(response) {
                    const repos = parseRepos(response);
                    localStorage.setItem("repos", JSON.stringify(repos));
                    commit(REPOS_SUCCESS, repos);
                    resolve(repos);
                })
                .catch(err => {
                    localStorage.removeItem("repos");
                    reject(err);
                });
        });
    },

    [REPOS_CLEANUP]: ({commit}) => {
        return new Promise(resolve => {
            commit(REPOS_CLEANUP);
            localStorage.removeItem("repos");
            resolve();
        });
    }
};

const mutations = {
    [REPOS_SUCCESS]: (state, repos) => {
        state.repos = repos;
    },
    [REPOS_CLEANUP]: state => {
        state.repos = "";
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};