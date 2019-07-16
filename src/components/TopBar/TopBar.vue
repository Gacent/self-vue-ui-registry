<template>
  <div class="topbar">
    <span @click="tomainLink" class="topSpan">{{topname}}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    topname: {
      type: String,
      default () {
        return 'Hello zjsUI'
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    tomainLink () {
      this.$emit('toLink')
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
@import './topbar.less';
</style>
