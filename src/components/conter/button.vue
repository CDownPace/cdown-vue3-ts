<template>
    <button :action="action" @click="compute">
        {{ innerText }}
    </button>
</template>
<script setup  lang="ts">
const props = defineProps({
    innerText: {
    type: String,
    default: () => '',
  },
  action: {
    type: String,
    default: () => '',
  }
})
const emit = defineEmits(['dispatch'])

const compute = () => {
//   emit('compute', props.action);
emit('dispatch', props.action);
//dispatch
};
</script>