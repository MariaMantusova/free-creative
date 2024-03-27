<script setup>
  import MediaItem from '../MediaItem/MediaItem.vue';
</script>

<template>
  <section class='media'>
    <h2 class='media__title'>Мы в СМИ</h2>

    <ul class='media__list'>
      <MediaItem mediaText='История агентства FREE.creative' mediaAuthor='vc.ru' />
      <MediaItem mediaText='Традиции и современность: брендинг ресторана-пекарни «Ешь Хлеб»'
                 mediaAuthor='vc.ru' />
      <MediaItem mediaText='Четыре боли крупных клиентов и целительная сила аккаунтинга'
                 mediaAuthor='vc.ru' />
      <MediaItem mediaText='Как выводить на рынок бренды будущего: кейс инновационной клиники витаминных коктейлей'
                 mediaAuthor='sostav.ru' />
    </ul>
  </section>
</template>

<style scoped src='./MediaBlock.css'></style>
