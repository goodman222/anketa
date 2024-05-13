<script setup>
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import SidebarItem from "./SidebarItem.vue";
import { useformDataStore } from "../stores/formDataStore";

const formDataStore = useformDataStore();

const currentPageNumber = computed(() => formDataStore.currentPage);
// console.log(currentPageNumber.value);
const currentPageName = computed(
  () => formDataStore.listOfPages[currentPageNumber.value - 1]
);
</script>

<template>
  <div class="bg-[#F6F7FB] pl-24 pt-24 min-h-full w-1/3 lg:w-full">
    <a class="" href="https://www.sibserv.com/">
      <img src="../img/logo.png" />
    </a>

    <h2 class="uppercase font-bold text-2xl lg:mt-10">
      ШАГ {{ currentPageNumber }}
    </h2>

    <p class="uppercase lg:mb-4">
      {{ currentPageName }}
    </p>

    <div class="lg:hidden">
      <SidebarItem
        v-for="(item, index) in formDataStore.listOfPages"
        :key="index"
        :pageNumber="index"
      />
    </div>
  </div>
</template>
