<template>
  <SidebarGroup>
    <SidebarGroupLabel>You</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="item in items" :key="`item-${item.title}`">
          <!-- TODO: change active to path  -->
          <!-- TODO: provide action on click -->
          <SidebarMenuButton :tooltip="item.title" as-child :is-active="false" @click="() => {}">
            <div class="flex flex-row items-center">
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
import SidebarGroupLabel from '@/components/ui/sidebar/SidebarGroupLabel.vue'
import SidebarMenu from '@/components/ui/sidebar/SidebarMenu.vue'
import SidebarMenuButton from '@/components/ui/sidebar/SidebarMenuButton.vue'
import SidebarMenuItem from '@/components/ui/sidebar/SidebarMenuItem.vue'
import {  HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-vue-next'
import { defineComponent, ref } from 'vue'

const ITEMS = [
  {
    title: 'History',
    url: '/playlists/history',
    icon: HistoryIcon,
    auth: true
  },
  {
    title: 'Like videos',
    url: '/playlists/liked',
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: 'All playlists',
    url: '/playlists',
    icon: ListVideoIcon,
    auth: true
  },
]

export default defineComponent({
  components: {
    HistoryIcon,
    ListVideoIcon,
    ThumbsUpIcon,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel
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
