<template>
  <aside class="">
    <SidebarProvider>
      <home-navbar :layout-view="layoutView" :layout-controller="layoutController" />
      <div class="flex min-h-screen pt-[4rem]">
        <home-sidebar :layout-view="layoutView" :layout-controller="layoutController" />
        <main class="main-container" :class="{ '--is-open': isOpen }">
          <slot />
        </main>
      </div>
    </SidebarProvider>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HomeNavbar from '../home-navbar'
import HomeSidebar from '../home-sidebar';
import { LayoutView } from '../../view/layout-view';
import { LayoutController, type ILayoutController } from '../../controller';
import type { ILayoutView } from '../../view/layout-view.types';
import SidebarProvider from '@/components/ui/sidebar/SidebarProvider.vue';

export default defineComponent({
  components: {
    HomeNavbar,
    HomeSidebar,
    SidebarProvider
  },
  setup() {
    const layoutView = ref<ILayoutView>(new LayoutView());
    const layoutController = ref<ILayoutController>(new LayoutController({
      layoutView: layoutView.value
    }))
    console.debug({ layoutView, layoutController })
    return {
      layoutView,
      layoutController
    }
  },
  computed: {
    isOpen(): boolean {
      return this.layoutView.openSidebar
    }
  }
})
</script>

<style scoped>
@import './home-layout.css';
</style>
