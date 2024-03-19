<template>
    <h1>{{ result }}</h1>
</template>
<script setup  lang="ts">
defineProps({
    result: {
    type: Number,
    default: () => 0,
  },
})
</script>