<template>
  <SidebarGroup>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="`item-${item.title}`">
          <!-- TODO: change active to path  -->
          <!-- TODO: provide action on click -->
          <SidebarMenuButton :tooltip="item.title" as-child :is-active="false" @click="() => {}">
            <div class="flex items-center gap-4">
              <component :is="item.icon" />
              <span class="text-sm"> {{ item.title }} </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>

<script lang="ts">
import SidebarGroup from '@/components/ui/sidebar/SidebarGroup.vue'
import SidebarGroupContent from '@/components/ui/sidebar/SidebarGroupContent.vue'
import SidebarMenu from '@/components/ui/sidebar/SidebarMenu.vue'
import SidebarMenuButton from '@/components/ui/sidebar/SidebarMenuButton.vue'
import SidebarMenuItem from '@/components/ui/sidebar/SidebarMenuItem.vue'
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-vue-next'
import { defineComponent, ref } from 'vue'

const ITEMS = [
  {
    title: 'Home',
    url: '/',
    icon: HomeIcon,
  },
  {
    title: 'Subscriptions',
    url: '/feed/subscriptions',
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: 'Trending',
    url: '/feed/trending',
    icon: FlameIcon,
  },
]

export default defineComponent({
  components: {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
  },
  setup() {
    const items = ref(ITEMS)
    return {
      items: items.value,
    }
  },
})
</script>
<style scoped></style>
