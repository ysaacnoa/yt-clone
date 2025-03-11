<template>
  <aside class="sidebar " :class="{ '--is-open': stateSidebar }">
    <main-section />
  </aside>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { ILayoutView } from '../../view/layout-view.types';
import type { ILayoutController } from '../../controller';
import MainSection from './main-section/main-section.vue';


export default defineComponent({
  components: {
    MainSection
  },
  props: {
    layoutView: {
      type: Object as PropType<ILayoutView>,
      required: true
    },
    layoutController: {
      type: Object as PropType<ILayoutController>,
      required: true
    }
  },
  setup() {
  },
  computed: {
    stateSidebar(): boolean {
      return this.$props.layoutView.openSidebar
    }
  }
})
</script>

<style scoped>
@import './home-sidebar.css';
</style>
