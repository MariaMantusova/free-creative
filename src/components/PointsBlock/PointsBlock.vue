<script setup>
  import PointsList from '../PointsList/PointsList.vue';

  const props = defineProps({
    blockClass: String,
    title: String,
  })

  const containerClass = props.blockClass ? "points-block__container_guaranty" : ""
</script>

<template>
  <section :class='`points-block ${blockClass}`'>
    <dix :class='`points-block__container ${containerClass}`'>
      <h2 class='points-block__title'>{{ title }}</h2>

      <PointsList :blockClass='blockClass'>
        <slot></slot>
      </PointsList>
    </dix>
  </section>
</template>

<style scoped src='./PointsBlock.css'></style>
