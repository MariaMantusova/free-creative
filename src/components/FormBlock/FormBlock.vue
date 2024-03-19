<script setup>
  import Form from '../Form/Form.vue';

  defineProps({
    title: String,
  })
</script>

<template>
  <section class='form-block'>
    <h2 class='form-block__title'>{{ title }}</h2>
    <slot></slot>

    <Form />
  </section>
</template>

<style src='./FormBlock.css'></style>
