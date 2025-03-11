<template>
  <aside class="sidebar bg-background" :class="{ '--is-open': stateSidebar }">
    <main-section />
    <Separator/>
    <personal-section/>
  </aside>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { ILayoutView } from '../../view/layout-view.types';
import type { ILayoutController } from '../../controller';
import MainSection from './main-section/main-section.vue';
import Separator from '@/components/ui/separator/Separator.vue';
import PersonalSection from './personal-section/personal-section.vue';

export default defineComponent({
  components: {
    MainSection,
    Separator,
    PersonalSection
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
