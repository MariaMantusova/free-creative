<script setup>
    import { ref } from "vue";
    import Form from '../Form/Form.vue';

    defineProps({
        isPopupOpened: Boolean,
        handlePopupClose: Function
    })
</script>

<template>
    <div :class='`popup__container ${isPopupOpened ? "popup__container_visible" : ""}`'>
        <section class="popup">
            <div class="popup__close-button" @click="handlePopupClose"></div>

            <h2 class="popup__title">Оставить заявку</h2>

            <Form formInputsClass='form__inputs_vertical' formClass='form_vertical' />
        </section>
    </div>
</template>

<style scoped src="./Popup.css"></style>