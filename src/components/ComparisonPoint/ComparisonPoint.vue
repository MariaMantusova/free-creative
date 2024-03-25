<script setup>
  defineProps({
    pointText: String,
    candidate1: String,
    candidate2: String,
    candidate3: String,
    candidateTitleClass: String,
    candidatesClass: String,
    textBorderClass: String,
    borderRadiusTopClass: String,
    borderRadiusBottomClass: String
  })
</script>

<template>
  <li class='point'>
    <p :class='`point__text ${borderRadiusTopClass} ${borderRadiusBottomClass}`'>{{ pointText }}</p>
    <div :class='`candidates ${candidatesClass}`'>
      <p :class='`candidate__text ${candidateTitleClass}`'>{{ candidate1 }}</p>
      <p :class='`candidate__text ${candidateTitleClass
        ? candidateTitleClass + " candidate__text-title_best"
        : "candidate__text_best"} ${textBorderClass}`'>
        {{ candidate2 }}</p>
      <p :class='`candidate__text ${candidateTitleClass}`'>{{ candidate3 }}</p>
    </div>
  </li>
</template>

<style scoped src='./ComparisonPoint.css'></style>
