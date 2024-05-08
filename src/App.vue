<script setup>
import { RouterLink, RouterView } from "vue-router";
import test from "./components/test.vue";
import AppInput from "./components/AppInput.vue";
import AppButton from "./components/AppButton.vue";
import PageLogo from "./components/PageLogo.vue";
</script>

<template>
  <div class="p-10">
    <AppInput
      type="text"
      placeholder="Женат"
      title="Семейное положение"
    ></AppInput>

    <AppInput
      type="date"
      placeholder="Женат"
      title="Семейное положение"
    ></AppInput>

    <PageLogo class="my-5"></PageLogo>

    <AppButton color="orange" class="mb-10">Добавить</AppButton>
    <AppButton color="grey" class="mb-10">Назад</AppButton>
    <AppButton color="grey" class="mb-10">Отправить анкету</AppButton>
  </div>
</template>

<style scoped></style>
