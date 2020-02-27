/** * Created by vouill on 11/13/17. */

<template>
  <div class="navigation">
    <ul>
      <li v-if="isAuthenticated" @click="logout">
        <span class="logout">Logout</span>
      </li>
      <li v-if="isAuthenticated" @click="repos">
        <span class="logout">Repos</span>
      </li>

    </ul>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}
.navigation {
  display: flex;
  color: white;
  align-items: center;
  background-color: #ffa035;
  padding: 5px;

  ul {
    display: flex;
    &:first-child {
      flex-grow: 1;
    }
    li {
      padding-right: 1em;
    }
  }
}
.brand {
  display: flex;
  align-items: center;
}
.logout {
  &:hover {
    cursor: pointer;
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import { AUTH_LOGOUT } from "actions/auth";

export default {
  name: "navigation",
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    },
    repos: function() {
      this.$router.push("/repos");
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>
