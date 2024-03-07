<template>
    <nav-bar />
    <div>
        <div class="attachment">
            <div class="feed-back-title" @click="changeKey">改变</div>
        </div>
        <father></father>
    </div>
</template>
    
<script setup lang="ts">
import Father from '@/components/Father.vue'
import { provide,ref } from 'vue';
const data = 'kk'
const refData = ref('ff')
provide('key', data)
provide('refKey', refData)
const changeKey = () => {
    refData.value = 'oo'
};
provide('changeKey', changeKey)
console.log('change5')

</script>
    
<style lang="scss" scoped></style>
    