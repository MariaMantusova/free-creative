<script setup>
  defineProps({
    title: String,
    text: String
  })
</script>

<template>
  <li class='step__text-block'>
    <h3 class='step__text-title'>{{ title }}</h3>
    <p class='step__text'>{{ text }}</p>
  </li>
</template>

<style scoped src='./StepText.css'></style>
