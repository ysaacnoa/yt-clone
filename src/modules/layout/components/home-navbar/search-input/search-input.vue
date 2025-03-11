<template>
  <form action="submit" class="flex w-full max-w-[600px]">
    <div class="relative w-full">
      <input
        type="text"
        placeholder="search"
        class="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500"
      />
    </div>
    <button
      type="submit"
      class="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
    >
      <SearchIcon class="size-5"/>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchIcon } from 'lucide-vue-next'
export default defineComponent({
  components: {
    SearchIcon
  },
  setup() {},
})
</script>

<style scoped></style>
