<template>
  <nav class="fixed h-[60px] top-0 left-0 px-4 w-full flex flex-row items-center">
    <div class="flex flex-row items-center">
      <MenuIcon class="hover:cursor-pointer"/>
      <div class="w-[70px]">
        <img src="../../../../../public/logo.svg" alt="logo" loading="lazy" />
      </div>
      <span class="text-xl font-semibold tracking-tight">Youtube</span>
    </div>

    <div class="flex mx-auto w-[763px]">
      <search-input />
    </div>

    <auth-button />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchInput from './search-input'
import AuthButton from '@/modules/auth/components/auth-button'
import { MenuIcon } from 'lucide-vue-next'

export default defineComponent({
  components: {
    SearchInput,
    AuthButton,
    MenuIcon
  },
  setup() {},
})
</script>
<style scoped></style>
