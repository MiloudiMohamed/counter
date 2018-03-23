<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Countdown</router-link> |
      <router-link to="/stopwatch">Stopwatch</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#nav {
  position: absolute;
  top: 20px;
  padding: 30px;
}
</style>
