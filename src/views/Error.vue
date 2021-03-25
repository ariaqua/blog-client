<template lang="pug">
.error(style="margin: 1rem")
  h1.title 404 Not Found
  p.link(@click="$router.replace({ name:  'Home'})", style="cursor: pointer; text-decoration: underline") Go To Home
</template>
