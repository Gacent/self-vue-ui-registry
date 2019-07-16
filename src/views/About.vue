<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { getInfo } from '@/api/apiList'
export default {
  mounted () {
    getInfo().then((res) => {
      console.log(res)
    })
  }
}
</script>
