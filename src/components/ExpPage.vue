<script setup>
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import Sidebar from "./Sidebar.vue";
import PageLogo from "./PageLogo.vue";
import Education from "./Education.vue";
import Exp from "./Exp.vue";

import { useformDataStore } from "../stores/formDataStore";
import { useRouter } from "vue-router";

const { currentPage } = defineProps({
  currentPage: Number,
});

const formDataStore = useformDataStore();
const store = formDataStore.form.exp;

formDataStore.setCurrentPage(currentPage);

const router = useRouter();

const ObjectTemplate = {
  dateStart: { value: "", isError: false },
  dateEnd: { value: "", isError: false },
  organizationName: { value: "", isError: false },
  place: { value: "", isError: false },
  jobTitle: { value: "", isError: false },
  id: 0,
};
</script>

<template>
  <div class="flex flex-row lg:flex-col">
    <Sidebar />
    <div class="pt-24 px-20 w-7/12 lg:w-full lg:pt-10 md:px-10 l:px-5">
      <PageLogo fileName="experience.png" class="mb-12" />
      <h1 class="font-bold text-xl uppercase mb-8">Опыт работы</h1>
      <form action="" class="mb-10 flex flex-col">
        <Exp
          v-for="(item, index) in store.work"
          :key="item.id"
          :index="index"
        ></Exp>
        <AppButton
          @click.stop.prevent="
            formDataStore.addItem('exp', 'work', ObjectTemplate)
          "
          color="orange"
          class="mr-5"
          >Добавить</AppButton
        >
        <div class="flex flex-row self-end mt-5">
          <AppButton @click="router.push('/page-3')" color="grey" class="mr-5"
            >Назад</AppButton
          >
          <AppButton
            color="orange"
            @click.prevent="formDataStore.nextPage('exp')"
            >Далее</AppButton
          >
        </div>
      </form>
    </div>
  </div>
</template>
