<template>
  <div class="default">
    <Header></Header>
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue'
</script>

<style scoped>
.default {
  /* border: 1px solid #b9e39e;
  padding: 1rem;
  position: relative;
  background-color: #b8e39e87; */
}
</style>
