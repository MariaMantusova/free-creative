<script setup>
  import StepText from '../StepText/StepText.vue';

  defineProps({
    imageUrl: String,
    imageTitle: String,
    firstText: String,
    secondText: String,
    thirdText: String,
    firstTitle: String,
    secondTitle: String,
    thirdTitle: String,
  })
</script>

<template>
  <li class='step'>
    <div class='step__image-block'>
      <img class='step__image' :src='imageUrl' alt='Иконка шага' />
      <h3 class='step__image-text'>{{ imageTitle }}</h3>
    </div>
    <ul class='step__text-list'>
      <StepText :title='firstTitle' :text='firstText' />
      <StepText :title='secondTitle' :text='secondText' />
      <StepText :title='thirdTitle' :text='thirdText' />
    </ul>
  </li>
</template>

<style scoped src='./Step.css'></style>
