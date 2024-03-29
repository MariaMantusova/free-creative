<script setup>
  import { ref } from 'vue';
  import ProjectPopup from "../ProjectPopup/ProjectPopup.vue";

  defineProps({
    projectImageUrl: String,
    projectName: String,
    projectSubtitle: String,
    projectDescription: String
  })

  const isProjectPopupOpened = ref(false);

  function handleOpenPopup() {
    isProjectPopupOpened.value = true;
  }

  function handleClosePopup() {
    isProjectPopupOpened.value = false;
  }
</script>

<template>
  <li class='project'>
    <img class='project__image' :src='projectImageUrl' :alt='projectName' />
    <div class='project__info'>
      <div class='project__text'>
        <h2 class='project__title'>{{ projectName }}</h2>
        <p class='project__subtitle'>{{ projectSubtitle }}</p>
      </div>
      <button class='project__button' @click="handleOpenPopup">Смотреть проект</button>
    </div>
  </li>

  <ProjectPopup :image="projectImageUrl" :text="projectDescription" :isProjectPopupOpened="isProjectPopupOpened"
   :handleClosePopup="handleClosePopup"/>
</template>

<style scoped src='./PortfolioProject.css'></style>
