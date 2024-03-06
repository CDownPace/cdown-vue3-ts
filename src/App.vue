<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive"></component>
    </router-view>
  </div>
</template>

<style></style>
