<template>
  <home-layout/>
  <main class="pt-16">
    hola mundo
  </main>
</template>

<script lang="ts">
import HomeLayout from '@/modules/layout/components/home-layout'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    HomeLayout
  }
})
</script>

<style scoped>

</style>
