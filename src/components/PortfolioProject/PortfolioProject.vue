<script setup>
  defineProps({
    projectImageUrl: String,
    projectName: String,
    projectSubtitle: String,
  })
</script>

<template>
  <li class='project'>
    <img class='project__image' :src='projectImageUrl' :alt='projectName' />
    <div class='project__info'>
      <div class='project__text'>
        <h2 class='project__title'>{{ projectName }}</h2>
        <p class='project__subtitle'>{{ projectSubtitle }}</p>
      </div>
      <button class='project__button'>Смотреть проект</button>
    </div>
  </li>
</template>

<style scoped src='./PortfolioProject.css'></style>
