<template>
    <div id="app">
        <navigation />
        <div class="main-container">
            <div class="center-container">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style>
    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        color: #2e426b;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
</style>

<style scoped>
    .main-container {
        min-height: calc(100vh - 70px);
    }
    .center-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>


<script>
    import Navigation from "components/navigation";

    export default {
        components: {
            Navigation
        },
        name: 'App',

    }
</script>

