<script setup>
  import {ref} from "vue";
  import { RouterLink } from 'vue-router';

  const isMenuOpened = ref(true);

  function closeMenu() {
    isMenuOpened.value = false
  }

  function openMenu() {
    isMenuOpened.value = true
  }
</script>

<template>
  <img v-if="!isMenuOpened" @click="openMenu" class="menu__icon" src="/menu.svg" alt="Меню"/>
  <div v-if="isMenuOpened" class="menu">
    <div class="menu__header">
      <img class="menu__logo" src="/logo-black.svg" alt="Логотип"/>
      <button class="menu__close-button" @click="closeMenu"></button>
    </div>

    <ul class="menu__links">
      <li>
        <router-link class="menu__link" to="/portfolio">Портфолио</router-link>
      </li>
      <li>
        <router-link class="menu__link" to="/terms">Как мы работаем?</router-link>
      </li>
      <li>
        <a @click="closeMenu" class="menu__link" href="#advantages">Преимущества</a>
      </li>
    </ul>

    <div class="menu__info">
      <p class="menu__text menu__number">8 (495) 156-39-11</p>
      <p class="menu__text menu__email">hello@free-creative.com</p>
    </div>
  </div>
</template>

<style scoped src="./BurgerMenu.css"></style>
