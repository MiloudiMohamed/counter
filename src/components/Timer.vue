<template>
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
</template>

<script>
export default {
  props: ['remainingSeconds', 'seconds', 'progressValue'],
  computed: {
    secondsCount () {
      return this.seconds
    },
    progress() {
      return this.progressValue
    },

    classFill()  {
      return `transform: rotate(${this.progressValue}deg)`
    },

    classFix()  {
      return `transform: rotate(${this.progressValue *2 }deg)`
    },
  },
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
