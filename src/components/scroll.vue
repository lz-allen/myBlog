<template>
    <div ref="wrapper">
      <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    enable: {
      type: Boolean,
      default: true
    },
    disable: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      if (this.listrnScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollEnd')
          }
        })
      }
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    }
  },
  disable () {
    this.scroll && this.scroll.disable()
  },
  enable () {
    this.scroll && this.scroll.enable()
  },
  refresh () {
    this.scroll && this.scroll.refresh()
  },
  scrollTo () {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
  },
  scrollToElement () {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
  },
  watch: {
    data () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.refresh && this.refresh()
        })
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped>

</style>
