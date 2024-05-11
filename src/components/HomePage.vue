<script setup>
import { ref } from "vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import { useformDataStore } from "../stores/formDataStore";
import { useRouter } from "vue-router";
const router = useRouter();

const formDataStore = useformDataStore();
const store = formDataStore.form.start;

const branches = [
  "Нефтеюганский филиал (Бурение/ВМР)",
  "Ямальский филиал (Бурения/ВМР)",
  "Томский филиал (Бурения/ВМР)",
  "ССК-Технологии (ННБ/Буровые растворы)",
  "Управление Цементирования Скважин (Цементирование скважин)",
  "Ремонт скважин (КРС)",
];

const date = new Date();

let dateString = date.toISOString().slice(0, 10);
</script>

<template>
  <div>
    <h1 class="uppercase font-bold text-4xl text-white mb-2">
      Анкета соискателя
    </h1>
    <p class="text-white">на потенциальное трудоустройство в АО «ССК»</p>

    <form class="flex flex-row justify-between items-end">
      <AppInput
        headColor="white"
        type="date"
        :placeholder="dateString"
        :isError="store.dateComlition.isError"
        category="start"
        fieldName="dateComlition"
        title="Дата заполнения"
        class="mr-4"
        v-model="store.dateComlition.value"
      ></AppInput>

      <AppInput
        headColor="white"
        type="text"
        placeholder="Электромонтер"
        :isError="store.vacancy.isError"
        category="start"
        fieldName="vacancy"
        title="Вакансия"
        class="mr-4"
        v-model="store.vacancy.value"
      ></AppInput>

      <AppInput
        headColor="white"
        type="dropdown"
        placeholder="Выберите"
        title="Желаемый филиал труда"
        category="start"
        fieldName="branch"
        :isError="store.branch.isError"
        :dropdownAnswers="branches"
        class="mr-4"
        v-model="store.branch.value"
      ></AppInput>

      <AppButton
        @click.prevent="formDataStore.nextPage('start')"
        color="orange"
      >
        Далее
      </AppButton>
    </form>
  </div>
</template>
