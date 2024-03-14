<script setup>
  import { RouterLink } from 'vue-router';
  import Header from "../Header/Header.vue";
</script>

<template>
  <section class="welcome">
    <Header/>

    <div class="welcome__text-block">
      <div class="welcome__text">
        <h1 class="welcome__title">Вам нужен фирменный стиль или ребрендинг?</h1>
        <p class="welcome__subtitle">Разработаем в срок от 10-ти дней</p>
      </div>

      <div class="welcome__buttons">
        <router-link to="/portfolio" class="welcome__button">Портфолио</router-link>
        <button class="welcome__button">Оставить заявку</button>
      </div>
    </div>
  </section>
</template>

<style lang="css" src="./Welcome.css" scoped></style>
