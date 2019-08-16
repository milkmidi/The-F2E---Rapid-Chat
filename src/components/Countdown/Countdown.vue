
<script>
// https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
const getCoordinatesForPercent = (percent:number):number[] => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};
const digi = (value:number):string => (value < 10 ? `0${value}` : `${value}`);
export default {
  props: {
    time: {
      type: Number,
      default: 600,
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    currentTime: 0,
  }),
  computed: {
    percent():number {
      return this.currentTime / this.time;
    },
    svgPath():string {
      const [startX, startY] = getCoordinatesForPercent(0);

      const [endX, endY] = getCoordinatesForPercent(this.percent);

      // if the slice is more than 50%, take the large arc (the long way around)
      const largeArcFlag = this.percent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        'L 0 0', // Line
      ].join(' ');
      return pathData;
    },
    displayTime():string {
      const minutesLeft:number = this.time - this.currentTime;
      const minText: string = digi(Math.floor(minutesLeft / 60));
      const secText: string = digi(minutesLeft % 60);
      return `${minText}:${secText}`;
    },
  },
  watch: {
    scale: {
      immediate: true,
      handler: 'startTime',
    },
  },
  methods: {
    startTime() {
      if (this.intervalId !== undefined) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if (this.currentTime >= this.time) {
          this.stopTime();
          this.$emit('timeup');
        }
      }, 1000 / this.scale);
    },
    stopTime() {
      clearInterval(this.intervalId);
      this.intervalId = -1;
    },
  },
  beforeDestroy() {
    this.stopTime();
  },
};
</script>

<template lang="pug">
.countdown
  .svg-wrap.flex-center
    svg(
      viewBox="-1 -1 2 2"
      style="transform: rotate(-90deg)")
      path(:d="svgPath")
  span {{displayTime}}
</template>

<style lang="stylus">
.countdown
  .svg-wrap
    display inline-flex
    border 2px solid black
    border-radius 50%
    width 20px
    height @width
    svg
      vertical-align middle
      display table-cell
      height 12px
  span
    margin-left 0.5rem
</style>