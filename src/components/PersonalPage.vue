<script setup>
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import Sidebar from "./Sidebar.vue";
import PageLogo from "./PageLogo.vue";

import { useformDataStore } from "../stores/formDataStore";
import { useRouter } from "vue-router";

const { currentPage } = defineProps({
  currentPage: Number,
});
console.log(currentPage);

const formDataStore = useformDataStore();
const store = formDataStore.form.start;
formDataStore.setCurrentPage(currentPage);
formDataStore.scrollUp();

const router = useRouter();
</script>

<template>
  <div class="flex flex-row lg:flex-col">
    <Sidebar />
    <div class="pt-24 px-20 w-7/12 lg:w-full lg:pt-10 md:px-10 l:px-5">
      <PageLogo fileName="personal.png" class="mb-12" />
      <form action="" class="mb-10 flex flex-col">
        <fieldset class="mb-5">
          <legend class="font-bold text-xl uppercase mb-8">
            Личная информация
          </legend>
          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="text"
              placeholder="Иванов"
              title="Фамилия"
              category="personal"
              fieldName="lastName"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="text"
              placeholder="Иван"
              title="Имя"
              category="personal"
              fieldName="name"
            />
          </div>
          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="text"
              placeholder="Иванович"
              title="Отчество"
              category="personal"
              fieldName="surname"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="date"
              title="Дата рождения"
              category="personal"
              fieldName="birthday"
              class=""
            />
          </div>
          <AppInput
            type="text"
            placeholder="г. Москва, улица Ленина"
            title="Место рождения"
            category="personal"
            fieldName="birthPlace"
            class="mr-4 mb-5"
          />

          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="email"
              placeholder="ivan@mail.ru"
              title="Электронная почта (E-Mail)"
              category="personal"
              fieldName="email"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="text"
              placeholder="+7--- --- ----"
              title="Мобильный телефон"
              category="personal"
              fieldName="phoneNumber"
            />
          </div>
          <AppInput
            type="text"
            placeholder="+7--- --- ----"
            title="Дополнительный телефон"
            category="personal"
            fieldName="morePhoneNumber"
            class="w-1/2 mb-5"
          />
        </fieldset>

        <fieldset>
          <legend class="font-bold text-xl uppercase mb-8">
            Паспортные данные
          </legend>

          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="number"
              placeholder="2699"
              title="Серия"
              category="personal"
              fieldName="passSeries"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="number"
              title="Номер"
              placeholder="536728"
              category="personal"
              fieldName="passNumber"
            />
          </div>

          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="date"
              title="Дата выдачи"
              category="personal"
              fieldName="passDate"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="text"
              title="Кем выдан"
              placeholder="860-005, УМВД России по ХМАО-Югре..."
              category="personal"
              fieldName="passPlace"
            />
          </div>

          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="number"
              placeholder="272825267112"
              title="ИНН"
              category="personal"
              fieldName="INN"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="number"
              placeholder="10203055135"
              title="СНИЛС"
              category="personal"
              fieldName="SNILS"
            />
          </div>
        </fieldset>
        <div class="flex flex-row self-end">
          <AppButton @click="router.push('/')" color="grey" class="mr-5"
            >Назад</AppButton
          >
          <AppButton
            color="orange"
            @click.prevent="formDataStore.nextPage('personal')"
            >Далее</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
