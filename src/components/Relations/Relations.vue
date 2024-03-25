<script setup>
  import FormBlock from "../FormBlock/FormBlock.vue";
</script>

<template>
  <section class='relations'>
    <FormBlock title='Связаться с нами' formClass='form_vertical'
               formInputsClass='form__inputs_vertical' formBlockClass='form-block_vertical' />

    <div class='relations__contacts'>
      <h2 class='contacts__title'>Контакты</h2>

      <p class='contacts__item'>8 (495) 156-39-11</p>
      <p class='contacts__item'>brand@free-creative.com</p>
      <p class='contacts__item'>Москва, Садовническая улица 69</p>
    </div>
  </section>
</template>

<style scoped src='./Relations.css'></style>
