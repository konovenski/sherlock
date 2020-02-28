<template>
    <div>
        <div v-if="!loading">
            <h1>Select repositories to inspect:</h1>
            <input type="checkbox" value="all" v-on:click="toggleAll">
            <label>Select All</label>
            <br><br>
            <form @submit.prevent="inspect">
                <div v-for="workspace in workspaces" :key="workspace.name">
                    <h2>{{workspace.name}}</h2>
                    <input type="checkbox" :value="workspace.name" v-on:click="toggle">
                    <label><b>Select All</b></label>
                    <div v-for="repo in repos" :key="repo.uuid">
                        <input type="checkbox" v-model="selected" :value="repo.full_name" @change="saveSelected"/>
                        <label>{{repo.full_name}}</label>
                    </div>
                </div>
                <hr/>
                <input type="date" v-model="date"/> <br><br>
                <button type="submit"> Submit</button>
            </form>
            <button v-on:click="getRepos">Refresh list</button>
        </div>
        <loading v-if="loading"/>
    </div>
</template>

<script>
    import {REPOS_REQUEST} from "actions/repo";

    export default {
        name: "repo-list",
        data() {
            return {
                loading: false,
                repos: this.$store.getters.repos || [],
                selected: JSON.parse(localStorage.getItem('repo-list:selected')) || [],
                date: "",
            }
        },
        methods: {
            toggleAll: function(event) {
                if (!event.target.checked) {
                    this.selected = [];
                } else {
                    this.selected = this.repos.map(e => e.full_name);
                }
                this.saveSelected();
            },
            toggle: function (event) {
                let workspace = event.target.value;

                if (!event.target.checked) {
                    this.selected = this.selected.filter(el => !this.workspaces[workspace].repos.includes(el));
                } else {
                    this.selected = this.selected.concat(this.workspaces[workspace].repos);
                }
                this.saveSelected();
            },
            saveSelected: function () {
                localStorage.setItem('repo-list:selected', JSON.stringify(this.selected));
            },
            getRepos: async function () {
                this.loading = true;
                try {
                    this.repos = await this.$store
                        .dispatch(REPOS_REQUEST, this.$store.getters.credentials);
                } catch (e) {
                    alert("Wrong credentials!")
                }
                this.loading = false
            },
            inspect: function () {
                const selected = this.selected;
                const date = this.date;
                this.$router.push({name: "UserList", query: {repos: selected, date: date}});
            }
        },
        created() {
            if (!this.$store.getters.cached) {
                this.getRepos();
            }
        },
        computed: {
            workspaces: function () {
                let workspaces = {};
                for (const repo of this.repos) {
                    const spaceName = repo.full_name.split('/')[0];
                    if (workspaces[spaceName] === undefined) {
                        workspaces[spaceName] = {
                            name: spaceName,
                            repos: []
                        }
                    }
                    workspaces[spaceName].repos.push(repo.full_name);
                }
                return workspaces;
            }
        }
    }
</script>

<style scoped>

</style>