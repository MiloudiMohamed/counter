<template>
  <div id="app">
    <div>
      <a class="fork" target="_blank" href="https://github.com/AdamKeen/counter">
        <img src="@/assets/images/fork.png" alt="">
      </a>
    </div>
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

.fork {
  position: fixed;
  top: 0;
  right: 0;
}

</style>
