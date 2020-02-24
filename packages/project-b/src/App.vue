<template>
  <div id="app">
    <header class="header">
      <header-view />
    </header>
    <main class="body">
      <router-view /> 
    </main>
    <footer></footer>
  </div>
</template>

<script type="text/javascript">
import HeaderView from 'web-shared/src/containers/Header/Header.vue';

export default {
  components: {
    HeaderView
  }
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
