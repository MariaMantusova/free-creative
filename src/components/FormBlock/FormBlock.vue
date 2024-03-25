<script setup>
  import Form from '../Form/Form.vue';

  defineProps({
    title: String,
    formClass: String,
    formInputsClass: String,
    formContainerClass: String,
    formBlockClass: String,
  })
</script>

<template>
  <section :class='`form-block ${formBlockClass}`'>
    <h2 class='form-block__title'>{{ title }}</h2>
    <slot></slot>

    <Form :formClass='formClass' :formInputsClass='formInputsClass' />
  </section>
</template>

<style src='./FormBlock.css'></style>
