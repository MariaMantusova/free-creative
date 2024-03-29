<script setup>
  import { RouterLink } from 'vue-router';

  defineProps({
    formClass: String,
    formInputsClass: String,
  })
</script>

<template>
  <form :class='`form ${formClass}`'>
    <div class='form__container'>
      <div :class='`form__inputs ${formInputsClass}`'>
        <input class='form__input' type='text' placeholder='Ваше имя' required/>
        <input class='form__input' type='tel' placeholder='+7 (999) 999-99-99' required/>
      </div>
      <label class='form__checkbox-label'>
        <input class='form__checkbox' type='checkbox' required/>
        Я принимаю
        <router-link to='/terms' class='form__checkbox-link'>условия передачи персональных данных</router-link>
      </label>
    </div>
    <button class='form_button'>Отправить заявку</button>
  </form>
</template>

<style scoped src='./Form.css'></style>
