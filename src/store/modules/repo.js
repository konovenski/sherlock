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
    cached: state => !!state.repos,
    repos: state => state.repos,
};

function parseRepos(response) {
    return response.data.values.map(element => {
        return {
            full_name: element.repository.full_name,
            uuid: element.repository.uuid
        }
    });
}


const actions = {
    [REPOS_REQUEST]: async ({commit}, user) => {
        let page = 1;
        let repos = [];
        const pagelen = 100;

        do {
            try {
                const uri = `https://api.bitbucket.org/2.0/user/`
                    + `permissions/repositories?pagelen=${pagelen}&page=${page}`;
                const response = await axios
                    .get(uri, {auth: user});

                repos = [...repos, ...parseRepos(response)];
                localStorage.setItem("repos", JSON.stringify(repos));
                await commit(REPOS_SUCCESS, repos);
            } catch (e) {
                localStorage.removeItem("repos");
                throw e;
            }
        }
        while ((repos.length === pagelen) && page++);

        return repos;
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