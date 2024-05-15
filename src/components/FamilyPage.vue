<script setup>
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import Sidebar from "./Sidebar.vue";
import PageLogo from "./PageLogo.vue";
import Relatives from "./Relatives.vue";

import { useformDataStore } from "../stores/formDataStore";
import { useRouter } from "vue-router";

const { currentPage } = defineProps({
  currentPage: Number,
});

const formDataStore = useformDataStore();
const store = formDataStore.form.family;

formDataStore.setCurrentPage(currentPage);

const router = useRouter();

const relativeArrayTemplate = {
  degree: { value: "", isError: false },
  fullName: { value: "", isError: false },
  birthday: { value: "", isError: false },
  workPlace: { value: "", isError: false },
  id: 0,
};
</script>
<template>
  <div class="flex flex-row lg:flex-col">
    <Sidebar />
    <div class="pt-24 px-20 w-7/12 lg:w-full lg:pt-10 md:px-10 l:px-5">
      <PageLogo fileName="home.png" class="mb-12" />
      <form action="" class="mb-10 flex flex-col">
        <fieldset>
          <legend class="font-bold text-xl uppercase mb-8">
            Проживание и семья
          </legend>
          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="text"
              placeholder="Женат"
              title="Семейное положение"
              category="family"
              fieldName="familyStatus"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="text"
              placeholder="Иван - 5 лет, София - 12 лет"
              title="Дети и их возраст"
              category="family"
              fieldName="children"
            />
          </div>

          <div class="flex flex-row mb-5 md:flex-col">
            <AppInput
              type="text"
              placeholder="г. Москва, улица Ленина"
              title="Адрес регистрации"
              category="family"
              fieldName="registrationAddress"
              class="mr-4 md:mb-5"
            />
            <AppInput
              type="text"
              placeholder="г. Москва, улица Ленина"
              title="Адрес проживания"
              category="family"
              fieldName="residentialAddress"
            />
          </div>

          <AppInput
            type="text"
            placeholder="Италия - 7 дней, туризм"
            title="Пребывание за границей (страна, срок, цель)"
            category="family"
            fieldName="abroad"
            class="mb-5 "
          />

          <AppInput
            type="text"
            placeholder="Нет"
            title="Привлекались ли к административной или уголовной ответственности, наличие судимости"
            category="family"
            fieldName="criminal"
            class="mb-5"
          />

          <AppInput
            type="dropdown"
            placeholder="Выберите"
            title="Наличие водительских прав"
            category="family"
            fieldName="driveLicense"
            :dropdownAnswers="['Да', 'Нет']"
            class="mr-4 mb-5"
          ></AppInput>

          <div
            v-show="formDataStore.form.family.driveLicense.value === 'Да'"
            class="flex flex-row mb-5 md:flex-col"
          >
            <AppInput
              type="text"
              placeholder="A, B, C, D"
              title="Категории"
              category="family"
              fieldName="driveCategory"
              class="mb-5 mr-4"
            />

            <AppInput
              type="text"
              placeholder="10 лет"
              title="Стаж"
              category="family"
              fieldName="driveExperience"
              class="mb-5"
            />
          </div>
          <h2 class="font-bold text-xl uppercase mb-8 mt-8">
            Ваши ближайшие родственники (муж/жена, мать, отец, родные братья и
            сестры)
          </h2>
          <Relatives
            v-for="(item, index) in store.relatives"
            :key="item.id"
            :index="index"
          />
          <AppButton
            @click.stop.prevent="
              formDataStore.addItem(
                'family',
                'relatives',
                relativeArrayTemplate
              )
            "
            color="orange"
            class="mr-5"
            >Добавить</AppButton
          >
        </fieldset>

        <div class="flex flex-row self-end mt-5">
          <AppButton @click="router.push('/page-1')" color="grey" class="mr-5"
            >Назад</AppButton
          >
          <AppButton
            color="orange"
            @click.prevent="formDataStore.nextPage('family')"
            >Далее</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
