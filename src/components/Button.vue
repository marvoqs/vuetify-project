<template>
  <v-btn
    prepend-icon="$vuetify"
    :size="size"
    :variant="variant"
    v-bind="$attrs"
  >
    {{ text }}
  </v-btn>
</template>

<script setup lang="ts">
  defineProps<{
    text: string
    size?: 'small' | 'medium' | 'large'
    variant?: 'text' | 'outlined' | 'tonal' | 'flat' | 'plain'
  }>()
</script>
