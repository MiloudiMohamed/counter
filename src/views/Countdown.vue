<template>
  <div class="home">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center flex-column">

        <!-- <Timer :remainingSeconds="remainingSeconds"
                    :seconds="seconds"
                    :progressValue="progressValue"/>
 -->
        <timer-svg :remainingSeconds="remainingSeconds"
                    :seconds="seconds"
                    :progressValue="progressValue" />

        <div class="form-group">
          <div class="form-group">
            <input type="number" class="form-control" placeholder="per seconds" v-model="seconds" min="0">
          </div>
          <button class="btn btn-primary mr-4" @click="countdown">Start counting</button>
          <button class="btn btn-warning" @click="reset">Reset</button>
          <audio id="alarm" ref="alarm" loop preload="auto">
            <source src="@/assets/sounds/alarm.wav">
          </audio>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Timer from '@/components/Timer.vue'
import TimerSvg from '@/components/TimerSvg.vue'

export default {
    components: {
        Timer,
        TimerSvg
    },

    data () {
      return {
        seconds: null,
        remainingSeconds: 0,
        progressValue: 0,
        interval: null,
        audio: null
      }
    },
    computed: {
        percentage() {
          return Math.floor((100 * (this.seconds - this.remainingSeconds)) / this.seconds)
        },
    },

    methods: {
      countdown () {
        if (this.seconds === null || this.seconds <= 0) {
            this.seconds = 0
          return
        }

        this.remainingSeconds = this.seconds
        this.interval = setInterval(() =>  {
          if (this.remainingSeconds === 0) {
            this.audio = this.$refs.alarm
            this.audio.play()
            clearInterval(this.interval)
            return
          }
          this.remainingSeconds = this.remainingSeconds - 1
          this.progressValue = this.percentage
        }, 1000)
      },

      reset () {
        this.seconds = 0;
        this.remainingSeconds = 0;
        this.progressValue = 0;
        clearInterval(this.interval)
        if (this.audio !== null) {
          this.audio.pause()
        }
      }

    },

}
</script>
