<script setup>
    defineProps({
        image: String,
        text: String,
        isProjectPopupOpened: Boolean,
        handleClosePopup: Function
    })
</script>

<template>
    <div :class='`project-popup__container ${isProjectPopupOpened ? "project-popup__container_visible" : ""}`'>
        <section class="project-popup">
            <div class="project-popup__close-button" @click="handleClosePopup"></div>
            <img class="project-popup__image" :src="image" :alt="text"/>
            <p class="project-popup__text">{{ text }}</p>
        </section>
    </div>
</template>

<style scoped src="./ProjectPopup.css"></style>