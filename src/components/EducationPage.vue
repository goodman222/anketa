<script setup>
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import Sidebar from "./Sidebar.vue";
import PageLogo from "./PageLogo.vue";
import Education from "./Education.vue";

import { useformDataStore } from "../stores/formDataStore";
import { useRouter } from "vue-router";

const { currentPage } = defineProps({
  currentPage: Number,
});

const formDataStore = useformDataStore();
const store = formDataStore.form.education;
formDataStore.setCurrentPage(currentPage);

const router = useRouter();

const basicObjectTemplate = {
  dateStart: { value: "", isError: false },
  dateEnd: { value: "", isError: false },
  organizationName: { value: "", isError: false },
  faculty: { value: "", isError: false },
  speciality: { value: "", isError: false },
  id: 0,
};

const additionalObjectTemplate = {
  dateStart: { value: "", isError: false },
  dateEnd: { value: "", isError: false },
  organizationName: { value: "", isError: false },
  faculty: { value: "", isError: false },
  id: 0,
};
</script>

<template>
  <div class="flex flex-row lg:flex-col">
    <Sidebar />
    <div class="pt-24 px-20 w-7/12 lg:w-full lg:pt-10 md:px-10 l:px-5">
      <PageLogo fileName="home.png" class="mb-12" />
      <h1 class="font-bold text-xl uppercase mb-8">Образование</h1>
      <form action="" class="mb-10 flex flex-col">
        <fieldset>
          <legend class="font-bold text-xl uppercase mb-8">
            Среднее, средне-специальное, высшее образование
          </legend>
          <Education
            educationType="basic"
            v-for="(item, index) in store.basic"
            :key="item.id"
            :index="index"
          ></Education>
          <AppButton
            @click.stop.prevent="
              formDataStore.addItem('education', 'basic', basicObjectTemplate)
            "
            color="orange"
            class="mr-5"
            >Добавить</AppButton
          >
        </fieldset>
        <fieldset>
          <legend class="font-bold text-xl uppercase mb-8">
            Дополнительное образование (курсы, переподготовки)
          </legend>
          <Education
            educationType="additional"
            v-for="(item, index) in store.additional"
            :key="item.id"
            :index="index"
          ></Education>
          <AppButton
            @click.stop.prevent="
              formDataStore.addItem(
                'education',
                'additional',
                additionalObjectTemplate
              )
            "
            color="orange"
            class="mr-5"
            >Добавить</AppButton
          >
        </fieldset>
        <div class="flex flex-row self-end mt-5">
          <AppButton @click="router.push('/page-2')" color="grey" class="mr-5"
            >Назад</AppButton
          >
          <AppButton
            color="orange"
            @click.prevent="formDataStore.nextPage('education')"
            >Далее</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
