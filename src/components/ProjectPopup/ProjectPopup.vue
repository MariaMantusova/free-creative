<script setup>
    defineProps({
        image: String,
        text: String
    })
</script>

<template>
    <div class="project-popup__container">
        <section class="project-popup">
            <div class="project-popup__close-button"></div>
            <img class="project-popup__image" :src="image" :alt="text"/>
            <p class="project-popup__text">{{ text }}</p>
        </section>
    </div>
</template>

<style scoped src="./ProjectPopup.css"></style>