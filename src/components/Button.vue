<template>
  <v-btn
    prepend-icon="$vuetify"
    :size="size"
    :variant="variant"
    v-bind="$attrs"
  >
    {{ text }}

    <span v-if="isLoading" class="ml-2">
      ...
    </span>
  </v-btn>
</template>

<script setup lang="ts">
  defineProps<{
    text: string
    isLoading?: boolean
    size?: 'small' | 'medium' | 'large'
    variant?: 'text' | 'outlined' | 'tonal' | 'flat' | 'plain'
  }>()
</script>
