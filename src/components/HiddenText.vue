<template>
  <div v-if="isDisplayed" class="hidden-text">
    This is a hidden text!
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    isDisplayed?: boolean;
  }>();
</script>