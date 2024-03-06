<template>
    <van-nav-bar title="意见反馈" class="nav-bar-container">
        <template #left>
            <!-- <img v-if="leftArrow" :src="customLeftIcon" class="left-icon" /> -->
        </template>
        <template #right>
            <!-- <van-popover v-model:show="showActionPopover" :actions="rightActions" placement="bottom-end" :offset="[12, 8]"
                @select="clickAction">
                <template #reference>
                    <img />
                </template>
            </van-popover> -->
            <img />
        </template>
    </van-nav-bar>
</template>
<script setup  lang="ts">


</script>
<style scoped>
.nav-bar-container {
    background: #fff;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.05);
    z-index: 1;
}

.left-icon {
    width: 24px;
    height: 24px;
}
</style>
