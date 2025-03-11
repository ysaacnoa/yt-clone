<template>
  <nav class="fixed h-[60px] top-0 left-0 px-4 w-full flex flex-row items-center">
    <div class="flex flex-row items-center">

      <MenuIcon class="hover:cursor-pointer" @click="toggle" />
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
import { defineComponent, type PropType } from 'vue'
import SearchInput from './search-input'
import AuthButton from '@/modules/auth/components/auth-button'
import { MenuIcon } from 'lucide-vue-next'
import type { ILayoutView } from '../../view/layout-view.types'
import type { ILayoutController } from '../../controller'

export default defineComponent({
  components: {
    SearchInput,
    AuthButton,
    MenuIcon
  },
  props: {
    layoutView: {
      type: Object as PropType<ILayoutView>,
      required: true,
    },
    layoutController: {
      type: Object as PropType<ILayoutController>,
      required: true
    }
  },
  setup(props) {
    const toggle = () => {
      props.layoutController.toggleSidebar()
    }
    return {
      toggle
    }
  },
})
</script>
<style scoped></style>
