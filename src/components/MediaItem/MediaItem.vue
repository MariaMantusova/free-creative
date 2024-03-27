<script setup>
  defineProps({
    mediaText: String,
    mediaAuthor: String
  })
</script>

<template>
  <li class='media-item'>
    <p class='media-item__text'>{{ mediaText }}</p>
    <p class='media-item__author'>{{ mediaAuthor }}</p>
  </li>
</template>

<style scoped src='./MediaItem.css'></style>
