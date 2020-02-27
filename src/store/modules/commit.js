import {COMMIT_REQUEST, COMMIT_SUCCESS} from "../actions/commit";

import axios from "axios";

const state = {
    commits: JSON.parse(localStorage.getItem('commits')) || {},
    lastCommit: JSON.parse(localStorage.getItem('last_commit')) || {}
};
const getters = {
    commits: (state) => state.commits
};


function dayDiff(date) {
    const now = new Date().getTime();
    const dateToCompare = new Date(date).getTime();
    return parseInt((now - dateToCompare) / 1000 / 60 / 60 / 24);
}

function parseCommits(response, lastCommit, maxDays) {
    let commits = [];
    for (const el of response.data.values) {
        if (el.hash === lastCommit) {
            break;
        }
        if (dayDiff(el.date) > 30) {
            break;
        }

        commits.push({
            hash: el.hash,
            link: el.links.html.href,
            author: el.author.raw,
            parents: el.parents.length,
            date: el.date,
            message: el.message
        })
    }
    return commits;
}


const actions = {
    [COMMIT_REQUEST]: async ({commit, state}, {user, repo, maxDays}) => {
        const pagelen = 100;

        let page = 1;
        let newCommits = [];
        let commits = [];

        do {
            const uri = `https://api.bitbucket.org/2.0/repositories/`
                + `${repo}/commits?pagelen=${pagelen}&page=${page}`
                + `&t=${new Date().getTime()}`;

            const response = await axios
                .get(uri, {auth: user});
            newCommits = parseCommits(response, state.lastCommit[repo], maxDays);
            commits = [...commits, ...newCommits];
        }
        while (newCommits.length !== 0 && page++);

        commit(COMMIT_SUCCESS, {commits, repo});


        return commits;
    }
};

const mutations = {
    [COMMIT_SUCCESS]: (state, {commits,repo}) => {
        if (state.commits[repo] === undefined) {
            state.commits[repo] = [];
        }
        state.commits[repo] = [...commits, ...state.commits[repo]];
        localStorage.setItem("commits", JSON.stringify(state.commits));

        if (commits.length > 0) {
            state.lastCommit[repo] = commits[0].hash;
            localStorage.setItem("last_commit", JSON.stringify(state.lastCommit));
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};