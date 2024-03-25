<script setup>
  import ComparisonPoint from '../ComparisonPoint/ComparisonPoint.vue';
</script>

<template>
  <ul class='comparisons'>
    <ComparisonPoint candidate1='Фрилансер' candidate2='Free.creative' borderRadiusTopClass='point__text_top'
                     candidateTitleClass='candidate__text-title' candidatesClass='candidates_no-border'
                     candidate3='Большое агентство с именем' />

    <ComparisonPoint pointText='Философия'
                     candidate1='Часто замотивирован как можно быстрее сделать и получить деньги.'
                     candidate2='Опытная команда профессионалов, нацеленная на результат. К каждому
                         проекту относимся как к родному, работаем на качество, а не на количество.'
                     candidate3='Огромная сверхопытная команда экстра профессионалов, выдающая проект строго исходя из
                        подписанной сметы и часов человека. Замотивированы делать “большие” и дорогие проекты.' />

    <ComparisonPoint pointText='Уровень дизайна'
                     candidate1='Как получится....'
                     candidate2='Высокий. За нас говорит наше портфолио и клиенты.'
                     candidate3='Высокий. За коллег говорит их портфолио и уровень клиентов.' />

    <ComparisonPoint pointText='Стоимость'
                     candidate1='В 90% случаев дешевле агентства.'
                     candidate2='Адекватная рынку и вашей задаче. Каждый кейс для нас – уникальный вызов,
                         мы погружаемся в бриф и выходим с ценовым предложением.'
                     candidate3='Высокая, иногда откровенно завышенная, малобюджетные клиенты неинтересны.' />

    <ComparisonPoint pointText='Отношение к клиенту'
                     candidate1='Как получится...'
                     candidate2='Нас можно назвать настоящими друзьями. Не бросаем в беде
                        и сделаем всё, чтобы решить проблему. На связи 24/7, поддерживаем и
                        консультируем онлайн и офлайн на каждом этапе сотрудничества.'
                     candidate3='Коммуникация ведется в рамках выделенных часов и сметы, вам уделяют
                         столько времени, сколько агентство считает нужным.
                         Иногда можно ждать ответ на свой имейл больше дня – это норма.' />

    <ComparisonPoint borderRadiusBottomClass='point__text_bottom' pointText='Сроки'
                     candidatesClass='candidates_no-border' textBorderClass='candidate__text_border'
                     candidate1='Иногда исполнитель вообще пропадает без связи'
                     candidate2='Мы адекватно подходим к срокам в нашем агентстве, не обещаем того,
                        чего не можем выполнить. Чётко менеджерим своё время, чтобы клиент получил всё в срок.'
                     candidate3='Долго, несколько уровней менеджмента, бюррократия, очередь из больших клиентов.' />
  </ul>
</template>

<style scoped src='./Comparisons.css'></style>
