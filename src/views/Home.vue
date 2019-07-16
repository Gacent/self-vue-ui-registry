<template>
  <div class="home">
    <TopBar :topname="'我的仓库'" @toLink="links"></TopBar>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    TopBar: () => import('@/components/TopBar')
  },
  methods: {
    links () {
      window.open('https://github.com/Gacent')
    }
  }
}
</script>
