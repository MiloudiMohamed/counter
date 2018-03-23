<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="form-group">
        <div class="form-group">
          <label class="text-center form-control">
              <h4>{{ time }}</h4>
          </label>
        </div>
        <button class="btn btn-primary mr-4" @click="start">Start</button>
        <button class="btn btn-secondary mr-4" @click="pause">Pause</button>
        <button class="btn btn-danger" @click="reset">Reset</button>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'stopwatch',
  data () {
    return {
        milleseconds: 0,
        time: 0,
        interval: null
    }
  },

  computed: {},

  methods: {
    start () {
        if (this.interval !== null) {
            return
        }
        this.interval = setInterval (() => {
            this.milleseconds = this.milleseconds + 10
            this.time = this.msToTime(this.milleseconds)
        }, 10)
    },

    pause () {
        clearInterval(this.interval)
        this.interval = null
    },

    reset () {
        clearInterval(this.interval)
        this.interval = null
        this.milleseconds = 0
        this.time = 0
    },

    msToTime(duration) {
      let milliseconds = parseInt((duration%1000)/1)
      let seconds = parseInt((duration/1000)%60)
      let minutes = parseInt((duration/(1000*60))%60)
      let hours = parseInt((duration/(1000*60*60))%24)

      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      return (hours + ":" + minutes + ":" + seconds + ":" + ("00" + milliseconds).slice(-3) );
    }
  },


  mounted () {}
}
</script>
