<script setup>
  defineProps({
    pointCount: Number,
    pointText: String
  })
</script>

<template>
  <li class='info-point'>
    <h3 class='info-point__number'>{{ pointCount }}</h3>
    <div class='info-point__text-container'>
    <p class='info-point__text'>{{ pointText }}</p>
    <slot></slot>
    </div>
  </li>
</template>

<style src='./InfoPoint.css'></style>
