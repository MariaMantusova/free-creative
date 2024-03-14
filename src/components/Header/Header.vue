<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="header__logo-info">
      <router-link to="/" class="logo-link">
        <img class="logo" src="/logo.svg" alt="Логотип">
      </router-link>
      <p class="logo-text">Разрабатываем фирменные стили с 2009 года</p>
    </div>
    <p class="header__number">8 (495) 156-39-11</p>
  </header>
</template>

<style lang="css" src="./Header.css" scoped></style>
