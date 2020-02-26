<template>
    <div>
        <h1>Select repositories to inspect:</h1>
        <form @submit.prevent="inspect">
            <div v-for="repo in repos" :key="repo.uuid">
                <input type="checkbox" v-model="selected" :value="repo.full_name"/>
                <label>{{repo.full_name}}</label>
            </div>
            <hr/>
            <button type="submit"> Submit</button>
        </form>
        <button v-on:click="getRepos">Refresh list</button>
    </div>
</template>

<script>
    import {REPOS_REQUEST} from "actions/repo";

    export default {
        name: "repo-list",
        data() {
            return {
                repos: this.$store.getters.repos || [],
                selected: [],
            }
        },
        methods: {
            getRepos: async function () {
                try {
                    this.repos = await this.$store
                        .dispatch(REPOS_REQUEST, this.$store.getters.credentials);
                } catch (e) {
                    alert("Wrong credentials!")
                }
            },
            inspect: function () {
                this.$router.push("/repos");
            }
        },
        created() {
            this.getRepos();
        }
    }
</script>

<style scoped>

</style>