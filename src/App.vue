<template>
  <div id="app">
    <top-header></top-header>
    <div id="nav">
      <!--<router-link to="/">Home</router-link> | -->
      <!--<router-link to="/about">About</router-link> | -->
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Register">Register</router-link> |
      <router-link to="/Secret">Secret</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from "./components/Top-Header";

export default {
  components: {'top-header': TopHeader}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
TopHeader