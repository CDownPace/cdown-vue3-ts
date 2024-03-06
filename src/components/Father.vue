<template>
    <child></child>
</template>
<script setup  lang="ts">
import Child from './Child.vue'
defineProps({
    name: {
    type: String,
    default: () => '',
  },
})

</script>
<style scoped>
</style>
