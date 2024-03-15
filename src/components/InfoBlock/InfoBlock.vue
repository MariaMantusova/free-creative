<script setup>
  defineProps({
    imageUrl: String,
    title: String,
    blockClass: String,
    titleClass: String
  })
</script>

<template>
  <section class="info-block">

    <h2 :class="`info-block__title ${titleClass}`">{{ title }}</h2>

    <div :class="`info-block__container ${blockClass}`">
      <img class="info-block__image" :src="imageUrl" :alt="title"/>
      <div class="text-block__container">
        <slot></slot>
      </div>
    </div>

  </section>
</template>

<style src="./InfoBlock.css"></style>
