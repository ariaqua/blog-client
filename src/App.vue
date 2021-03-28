<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="Articles">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- <router-view /> -->
</template>
