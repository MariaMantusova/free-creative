<script setup>
  import { term1, term2, term3, term4, term5, term6, term7, term8 } from "./../../utils/terms-text.js";
  import TermPoint from "../TermPoint/TermPoint.vue";
</script>

<template>
  <ul class="terms__list">
   <TermPoint title="1. Общие положения" :text="term1" />
   <TermPoint title="2. Основные понятия, используемые в Политике" :text="term2" />
   <TermPoint title="3. Оператор может обрабатывать следующие персональные данные пользователя"
              :text="term3" />
   <TermPoint title="4. Цели обработки персональных данных" :text="term4" />
   <TermPoint title="5. Правовые основания обработки персональных данных" :text="term5" />
   <TermPoint title="6. Правила сбора, хранения, передачи и других способов обработки персональных данных"
              :text="term6" />
   <TermPoint title="7. Трансграничнная передача персональных данных" :text="term7" />
   <TermPoint title="8. Заключительные положения" :text="term8" />
  </ul>
</template>

<style scoped src="./TermsList.css"></style>
