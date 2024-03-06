<template>
    <h1>{{ refKey }}</h1>
    <h2>{{ key }}</h2>
    <h2>{{ name }}</h2>
    <button @click="changeKey">改变refKey,通过依赖注入</button>
</template>
<script setup  lang="ts">
import { inject, ref } from 'vue'
const name = ref('名字')
const key = inject('key')
const refKey = inject('refKey')
const changeKey = inject('changeKey')

</script>
<style scoped>
</style>
