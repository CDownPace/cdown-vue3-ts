<template>
    <div>
        <counter-result :result="result"/>
        <counter-button innerText ='+'  action="PLUS" @dispatch="dispatchs"/>
        <counter-button  innerText ='-' action="MINUS" @dispatch="dispatchs"/>
    </div>
</template>
    
<script setup lang="ts">
import counterResult from './result.vue'
import counterButton from './button.vue'
import {dispatch} from '../../dispatchers/counter'
import { ref } from 'vue'

const result = ref(0)

const dispatchs = (...args: any[])=> {
    // dispatch(result)(...args)
    console.log('args',...args)
    dispatch(result)(...args)

}
</script>
    
<style lang="scss" scoped></style>
    