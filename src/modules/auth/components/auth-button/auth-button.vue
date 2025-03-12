<template>
  <SignedIn>
    <UserButton/>
    <!-- todo: add menu items and studio profile -->
  </SignedIn>
  <SignedOut>
    <SignInButton mode="modal">
      <Button
        variant="outline"
        class="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500 rounded-full shadow-none"
      >
        <UserCircleIcon />
        Sign In
      </Button>
    </SignInButton>
  </SignedOut>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-vue-next'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/vue'

export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Button,
    UserCircleIcon,
    UserButton,
    SignInButton,
    SignedIn,
    SignedOut,
  },
  setup() {},
})
</script>

<style scoped></style>
