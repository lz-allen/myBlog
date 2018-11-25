<template>
  <div class="contentList">
    <home>
      <h4 slot="title"><el-tag type="danger">类别</el-tag><el-tag type="warning">{{this.$route.query.typeId}}</el-tag></h4>
    </home>
  </div>
</template>

<script>
import Home from '@/views/home'
export default {
  components: {
    Home
  },
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}

</script>
<style lang="less" scoped>
  .contentList {}

</style>
