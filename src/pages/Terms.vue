<script setup>
  import { RouterLink } from 'vue-router';
  import TermsList from "../components/TermsList/TermsList.vue";
</script>

<template>
  <div class="terms-page">
    <router-link to="/" class="terms__title">Вернуться на главную страницу</router-link>

    <h1 class="terms__subtitle">Политика в отношении обработки персональных данных</h1>

    <TermsList />
  </div>
</template>

<style scoped>
  .terms-page {
    max-width: 70%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 650px) {
    .terms-page {
      max-width: 90%;
    }
  }

  .terms__title {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: normal;
    color: black;
    transition: opacity 0.3s ease;
  }

  .terms__title:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 650px) {
    .terms__title {
      font-size: 22px;
    }
  }

  .terms__subtitle {
    margin: 0;
    font-size: 19px;
    font-weight: normal;
  }
</style>
