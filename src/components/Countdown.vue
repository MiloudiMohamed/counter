<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center flex-column">

      <div class="radial-progress" data-progress="20">
        <div class="circle">
          <div class="mask full" :style="classFill">
            <div class="fill" :style="classFill"></div>
          </div>
          <div class="mask half">
            <div class="fill" :style="classFill"></div>
            <div class="fill fix" :style="classFix"></div>
          </div>
          <div class="shadow"></div>
        </div>
        <div class="inset">
          <div class="percentage">{{ remainingSeconds }}</div>
        </div>
      </div>

      <!-- <img src="@/assets/Codecourse.png" alt="image"> -->
      <div class="form-group">
        <div class="form-group">
          <input type="number" class="form-control" placeholder="per seconds" v-model="seconds">
        </div>
        <button class="btn btn-primary mr-4" @click="countdown">Start counting</button>
        <button class="btn btn-warning" @click="reset">Reset</button>
        <audio id="alarm" ref="alarm" loop preload="auto">
          <source src="@/assets/sounds/alarm.wav">
        </audio>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Countdown',
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
    secondsCount () {
      return this.seconds
    },
    progress() {
      return this.progressValue
    },

    percentage() {
      return Math.floor((180 * (this.seconds - this.remainingSeconds)) / this.seconds)
    },

    classFill()  {
      return `transform: rotate(${this.progressValue}deg)`
    },

    classFix()  {
      return `transform: rotate(${this.progressValue *2 }deg)`
    },
  },

  methods: {
    countdown () {
      if (this.seconds === null) {
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

  mounted() {
    // let alarm = document.getElementById('alarm');
    // alarm.play()
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.radial-progress {
  margin: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.mask, .fill, .shadow {
  width: 120px;
  height: 120px;
  position: absolute;
  border-radius: 50%;
}
.mask, .fill {
  transition: transform 1s;
  border-radius: 50%;
}
.mask {
  clip: rect(0px, 120px, 120px, 60px);
}
.fill {
  clip: rect(0px, 60px, 120px, 0px);
  background-color: #ff2321;
  opacity: .8;
}
.radial-progress .inset {
  width: 114px;
  height: 114px;
  position: absolute;
  margin-left: 3px;
  margin-top: 3px;
  background-color: #fff;
  border-radius: 50%;
}
.radial-progress .inset .percentage {
  width: 57px;
  position: absolute;
  top: 42%;
  left: 24%;
  line-height: 1;
  text-align: center;
  color: #333;
  font-size: 22px;
}

.mask.full, .circle .fill {
  transform: rotate(0deg);
}
.circle .fill.fix {
  transform: rotate(0deg);
}

</style>
