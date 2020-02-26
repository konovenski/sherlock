<template>
    <div>
        <form class="login" @submit.prevent="login">
            <h1>Your bitbucket credentials</h1>
            <label>Login</label>
            <input required v-model="username" type="text" placeholder="Login" />
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password" />
            <hr />
            <button type="submit"> Submit </button>
        </form>
    </div>
</template>

<script>
    import { AUTH_REQUEST } from "actions/auth";

    export default {
        name: "login",
        data () {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login: function() {
                const { username, password } = this;
                this.$store
                    .dispatch(AUTH_REQUEST, { username, password })
                    .then(() => {
                        this.$router.push("/repos");
                    })
                    .catch(() => {
                        alert("Wrong credentials!");
                    });
            }
        }
    }
</script>

<style>
    .login {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 10px;
    }
</style>