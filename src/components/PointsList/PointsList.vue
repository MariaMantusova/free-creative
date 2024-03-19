<script setup>
  import InfoPoint from '../InfoPoint/InfoPoint.vue';

  const props = defineProps({
    blockClass: String,
  })

  const point1 = !props.blockClass ? "Название компании"
    : "Разработкой вашего фирменного стиля займется команда профессионалов с высшим профильным образованием."
  const point2 = !props.blockClass ? "Логотип – основной графический символ"
    : "Все права на результат работ переходят от Исполнителя к Заказчику и это закреплено" +
    "юридически в нашем с вами Договоре."
  const point3 = !props.blockClass ? "Фирменные цвета всей коммуникации (онлайн и оффлайн)"
    : "Все сотрудники компании строго соблюдают правила коммерческой тайны по вашему проекту," +
    " мы никогда не разглашаем стоимость разработки вашего проекта и любые детали, связанные с проектом."
  const point4 = !props.blockClass ? "Шрифт"
    : "Мы гарантируем, что любая разработка проходит проверку на оригинальность, " +
    "вы получайте действительно уникальный продукт"
  const point5 = !props.blockClass ? "Носители фирменного стиля"
    : "Мы имеем опыт работы с малым, средним и крупным бизнесом, а также с международными" +
    " корпорациями Наша репутация - это 9-ть лет успешной работы. 8-мь из 10-ти клиентов после " +
    "совместной разработки фирменного стиля обращаются к нам повторно: за созданием сайта, контента для " +
    "социальных сетей или по любой другой задаче."
</script>

<template>
  <ul class='points__list'>
    <InfoPoint :pointCount='1' :pointText='point1' />
    <InfoPoint :pointCount='2' :pointText='point2' />
    <InfoPoint :pointCount='3' :pointText='point3' />
    <InfoPoint :pointCount='4' :pointText='point4' />
    <InfoPoint :pointCount='5' :pointText='point5'>
      <slot></slot>
    </InfoPoint>
  </ul>
</template>

<style scoped src='./PointsList.css'></style>
