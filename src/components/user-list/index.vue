<template>
    <div>
        <div v-if="!loading">
            <h3>Commits: {{users.total.commits}}</h3>
            <h3>Merges: {{users.total.merges}}</h3>
            <b-table :items="users.list" :fields="fields" striped responsive="sm">
                <template v-slot:cell(commits)="row">
                    <div>{{row.item.commits.length}}</div>
                </template>

                <template v-slot:cell(merges)="row">
                    <div>{{row.item.merges.length}}</div>
                </template>

                <template v-slot:cell(+)="row">
                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                    </b-button>
                </template>

                <template v-slot:row-details="row">
                    <hr>
                    <b-card>
                        <h2>Commits</h2>
                        <b-col>
                            <b-row v-for="commit in row.item.commits" v-bind:key="commit.hash">
                                <a :href="commit.links.html.href"
                                   target="_blank">{{commit.summary.raw.substr(0,50)}}...</a>
                            </b-row>
                        </b-col>
                        <h2>Merges</h2>
                        <b-col>
                            <b-row v-for="merge in row.item.merges" v-bind:key="merge.hash">
                                {{hoursAgo(merge.date)}} hours ago: <a :href="merge.links.html.href"
                                   target="_blank">{{merge.summary.raw.substr(0,50)}}...</a>
                            </b-row>
                        </b-col>
                    </b-card>
                    <hr>
                </template>
            </b-table>
        </div>
        <loading v-if="loading"/>
    </div>
</template>

<script>
    import {COMMIT_REQUEST} from "actions/commit";

    function isToday(date) {
        const dateToCheck = new Date(date).toDateString();
        const currentDate = new Date().toDateString();
        return true;
        return currentDate === dateToCheck;
    }

    export default {
        name: "user-list",
        data() {
            let repos = this.$route.query.repos || [];
            if (!Array.isArray(repos) && repos) {
                repos = [repos];
            }
            return {
                loading: false,
                fields: ['name', 'commits', 'merges', '+'],
                repos: repos,
                users: {list: [], total: {commits: 0, merges: 0}}
            }
        },
        methods: {
            hoursAgo: (date) => {
                const givenDate = new Date(date).getTime();
                const now = new Date().getTime();

                return parseInt((now - givenDate)/1000/60/60);
            },
            list: async function () {
                this.loading = true;
                let commits = [];
                for (const repo of this.repos) {
                    const repoCommits = await this.$store
                        .dispatch(COMMIT_REQUEST, {user: this.$store.getters.credentials, repo: repo});
                    commits = [...commits, ...repoCommits];

                }

                const users = {};
                let summary = {
                    commits:0,
                    merges:0
                };
                for (const el of commits) {
                    if (!isToday(el.date)) {
                        continue;
                    }
                    const name = el.author.raw;
                    if (!users[name]) {
                        users[name] = {name: name, commits: [], merges: []};
                    }
                    if (el.parents.length > 1) {
                        users[name].merges.push(el);
                        summary.merges++;
                        continue;
                    }
                    if (el.message.toLowerCase().includes("merge")) {
                        users[name].merges.push(el);
                        summary.merges++;
                        continue
                    }
                    users[name].commits.push(el);
                    summary.commits++;
                }

                this.users.list = Object.values(users);
                this.users.total = summary;
                this.loading = false;
            }
        },
        created() {
            this.list();
        }
    }
</script>

<style>

</style>