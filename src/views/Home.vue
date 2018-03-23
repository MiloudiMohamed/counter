<template>
  <div class="home">
    <Countdown msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Countdown from '@/components/Countdown.vue'

export default {
  name: 'home',
  components: {
    Countdown
  }
}
</script>
