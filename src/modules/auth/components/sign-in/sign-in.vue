<template>
  <section class="min-h-screen flex items-center justify-center">
    <SignIn />
  </section>
</template>

<script setup lang="ts">
import { SignIn } from '@clerk/vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@clerk/vue';
import { watch } from 'vue';

const router = useRouter();
const { isSignedIn } = useAuth();

watch(isSignedIn, (signedIn) => {
  if (signedIn) {
    router.push({
      name: 'home'
    });
  }
});

</script>

