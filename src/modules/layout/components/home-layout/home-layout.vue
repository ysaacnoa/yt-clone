<template>
  <aside class="">
    <home-navbar />

    <slot/>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeNavbar from '../home-navbar'
export default defineComponent({
  components: {
    HomeNavbar
  },
  setup() {

  },
})
</script>

<style scoped>

</style>
