<script setup>
  import PortfolioProject from '../components/PortfolioProject/PortfolioProject.vue';
</script>

<template>
  <h1 class='portfolio__title'>Наши работы</h1>
  <ul class='portfolio__list'>
    <PortfolioProject projectImageUrl='./projects/amperia.png' projectName='Amperia'
                      projectSubtitle='Бренд красивых сувениров и подарков для дома' />

    <PortfolioProject projectImageUrl='./projects/aqlifecare.png' projectName='AQ.Lifecare'
                      projectSubtitle='Инновационная клиника внутривенной медицины'/>

    <PortfolioProject projectImageUrl='./projects/vilata.png' projectName='Vilata'
                      projectSubtitle='Бренд натуральных и вкусных соусов'/>

    <PortfolioProject projectImageUrl='./projects/coral-black.png' projectName='Coral Black'
                      projectSubtitle='Черная икра в современной инторпритации'/>
  </ul>
</template>

<style scoped>

  .portfolio__title {
    margin-bottom: 0;
    margin-top: 30px;
    font-size: 39px;
  }

  @media screen and (max-width: 730px) {
    .portfolio__title {
      font-size: 34px;
    }
  }

  .portfolio__list {
    padding: 0;
    margin: 80px 0 60px;
    list-style: none;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 100px;
    max-width: 80%;
  }

  @media screen and (max-width: 1100px) {
    .portfolio__list {
      max-width: 90%;
    }
  }

  @media screen and (max-width: 730px) {
    .portfolio__list {
      margin-top: 60px;
      gap: 50px;
    }
  }

  @media screen and (max-width: 585px) {
    .portfolio__list {
      max-width: 95%;
    }
  }

</style>
