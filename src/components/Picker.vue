<template>
    <van-picker
    :model-value="value"
    :title="title"
    :columns="columns"
    @cancel="handleCancel"
    @confirm="handleConfirm"
    >

    </van-picker>
</template>
<script setup  lang="ts">
import {defineEmits} from 'vue'

import { PickerOption } from "vant";

defineProps({
    columns: {
    // type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: () => '',
  },
  value: {
    // type: Array,
    default: () => [],
  }
})
const emit = defineEmits(['confirm', 'cancel'])

const handleCancel = (e:PickerOption[] | PickerOption[][]) => {
  emit('cancel', e);
};
const handleConfirm = (e:PickerOption[] | PickerOption[][]) => {
  emit('confirm', e);
};
</script>
<style>
</style>