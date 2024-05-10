<script setup>
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import PageLogo from "./PageLogo.vue";
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

    <PageLogo class="my-5" fileName="home.png"></PageLogo>

    <AppInput
      type="dropdown"
      placeholder="Выбор"
      title="Водительские права"
      :dropdownAnswers="['Да', 'Нет', 'Наверное']"
      class="mb-10"
    ></AppInput>

    <AppButton color="orange" class="mb-10">Добавить</AppButton>
    <AppButton color="grey" class="mb-10">Назад</AppButton>
    <AppButton color="grey" class="mb-10">Отправить анкету</AppButton>
  </div>
</template>
