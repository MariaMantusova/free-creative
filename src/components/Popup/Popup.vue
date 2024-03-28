<script setup>
    import Form from '../Form/Form.vue';
</script>

<template>
    <div class="popup__container">
        <section class="popup">
            <div class="popup__close-button"></div>

            <h2 class="popup__title">Оставить заявку</h2>

            <Form formInputsClass='form__inputs_vertical' formClass='form_vertical' />
        </section>
    </div>
</template>

<style scoped src="./Popup.css"></style>