<script setup>
  defineProps({
    title: String,
    text: String
  })
</script>

<template>
  <li class="term-point">
    <h2 class="term__title">{{ title }}</h2>
    <p class="term__text">{{ text }}</p>
  </li>
</template>

<style scoped src="./TermPoint.css"></style>
