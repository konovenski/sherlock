import {COMMIT_REQUEST} from "../actions/commit";

import axios from "axios";

const state = {
};
const getters = {};
const mutations = {};

const actions = {
    [COMMIT_REQUEST]: (_, {user, repo}) => {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://api.bitbucket.org/2.0/repositories/${repo}/commits?pagelen=100&t=${new Date().getTime()}`, {
                    auth: user
                })
                .then(function (response) {
                    resolve(response.data.values);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
};


export default {
    state,
    getters,
    actions,
    mutations
};