<template>
  <div id="app">
    <header>
      <router-link to="/">
        <h1>Awesome blog</h1>
      </router-link>
    </header>
    <router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 1.5rem;
}

* + * {
  margin-top: 1.5rem;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
