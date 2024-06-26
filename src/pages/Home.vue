<script setup>
  import { ref } from "vue";
  import Welcome from "../components/Welcome/Welcome.vue";
  import InfoBlock from "../components/InfoBlock/InfoBlock.vue";
  import PointsBlock from '../components/PointsBlock/PointsBlock.vue';
  import FormBlock from '../components/FormBlock/FormBlock.vue';
  import StepsBlock from '../components/StepsBlock/StepsBlock.vue';
  import Comparisons from '../components/Comparisons/Comparisons.vue';
  import Relations from '../components/Relations/Relations.vue';
  import Footer from '../components/Footer/Footer.vue';
  import MediaBlock from '../components/MediaBlock/MediaBlock.vue';
  import Popup from "../components/Popup/Popup.vue";

  const isPopupOpened = ref(false);

  function handlePopupClose() {
    isPopupOpened.value = false;
  }

  function handlePopupOpen() {
    isPopupOpened.value = true;
  }
</script>

<template>
  <Welcome :handlePopupOpen="handlePopupOpen" />

  <InfoBlock imageUrl="./style-block-img.png" title="Что такое фирменный стиль?">
    <p class="info-block__text">Это набор тех уникальных «признаков», по которым клиент отличит вас от других компаний.
      Фирменный стиль отражает миссию бренда, ценности, является способом его идентификации,
      формирует определённое восприятие в коммуникации с потребителями.
     </p>
    <p class="info-block__text">
      В идеале разработка корпоративного стиля должна происходить одновременно с созданием бизнеса и
      формированием его фундаментальных идей. Есть и второй вариант: бизнес существует определенное
      время и ему нужен перезапуск - это называется редизайн или ребрендинг:
      в мире жёсткой конкуренции важно быть «в тренде», успевать за изменениями в поведениях покупателя и “говорить”
      с ним на одном языке.
    </p>
  </InfoBlock>

  <PointsBlock title='Название и логотип – важные составляющие фирменного стиля, но на этом всё только начинается.
  Ниже основные элементы:'>
    <p class='info-point__span'>
      Этот набор варьируется в зависимости от нужд и потребностей компании: визитные карточки,
      фирменные бланки и прочая деловая документация, упаковка, сувенирная продукция, брендинг автотранспорта.
    </p>
  </PointsBlock>

  <InfoBlock imageUrl="./price-block-img.png" title="Сколько стоит фирменный стиль?" titleClass="title_reversed"
             blockClass="container_reversed">
    <p class="info-block__text">
      Каждая задача по разработке фирменного стиля уникальна для нас — это новый вызов и новые эмоции.
      Мы принципиально не предлагаем вам стандартизированные пакеты “эконом”, “стандрат”, или “премиум”,
      мы не штампуем, мы - создаем.
    </p>
    <p class="info-block__text">
      Стоимость разработки фирменного стиля в нашем агентстве начинается от 120 000 руб.,
      финальную планку без брифинга определить невозможно - давайте созвонимся и обсудим ваш проект!
    </p>
    <p class="info-block__text text-block__back_blue">
      Каждый клиент нашего агентства получает приятный бонус на финише проекта, о котором мы расскажем ниже ▼
    </p>
  </InfoBlock>

  <InfoBlock imageUrl="./gaid-block-img-xl.png" title="Гайдлайны в подарок">
    <div class="text-block__background">
      <h3 class="text-block__title">Что такое гайдлайн и зачем он нужен?</h3>
      <p class="info-block__text">
        А теперь об обещанном бонусе: заказывая фирменный
        стиль в нашем агентстве вы получаете минимальный гайдлайн в подарок,
        это позволит вам уже быть на шаг впереди ваших конкурентов!
      </p>
    </div>
    <p class="info-block__text">
      Гайдлайн – это свод правил по воспроизведению фирменного стиля на носителях. Если коротко, то в гайдлайне описано,
      как должен выглядеть каждый элемент корпоративного стиля и какие правила его использования.
      Гайдлайн помогает вашему бизнесу экономить время и деньги, помогать масштабироваться, а также тиражировать
      ваш бизнес посредством франшизы.
    </p>
  </InfoBlock>

  <FormBlock title='Оставьте заявку на разработку вашего продукта'>
    <p class='form-block__subtitle'>Наши эксперты свяжутся с вами в ближайшее время</p>
  </FormBlock>

  <StepsBlock  />

  <Comparisons />

  <PointsBlock blockClass='points-block_guaranty'
               title='Гарантия качества: 5&nbsp;фундаментальных&nbsp;преимуществ работать&nbsp;с&nbsp;нами'/>

  <Relations />

  <MediaBlock />

  <Footer />

  <Popup :isPopupOpened="isPopupOpened" :handlePopupClose="handlePopupClose"/>
</template>

<style scoped>
</style>
