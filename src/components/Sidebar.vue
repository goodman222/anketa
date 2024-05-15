<script setup>
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import SidebarItem from "./SidebarItem.vue";
import ProgressBar from "./ProgressBar.vue";
import { useformDataStore } from "../stores/formDataStore";

const formDataStore = useformDataStore();

const currentPageNumber = computed(() => formDataStore.currentPage);
// console.log(currentPageNumber.value);
const currentPageName = computed(
  () => formDataStore.listOfPages[currentPageNumber.value - 1]
);
const progress = computed(() => (currentPageNumber.value / 5) * 100);
</script>

<template>
  <div
    class="bg-[#F6F7FB] pl-24 pt-24 min-h-full w-1/3 lg:w-full lg:py-20 lg:px-10 md:pl-10 l:pl-5"
  >
    <a class="" href="https://www.sibserv.com/">
      <img src="../img/logo.png" />
    </a>

    <h2 class="uppercase font-bold text-2xl mt-10">
      ШАГ {{ currentPageNumber }} <span class="minLg:hidden"> / 5</span>
    </h2>

    <p class="uppercase mb-4 mt-4">
      {{ currentPageName }}
    </p>

    <ProgressBar :progress="progress" class="mt-8 minLg:hidden"></ProgressBar>
    <div class="lg:hidden">
      <SidebarItem
        v-for="(item, index) in formDataStore.listOfPages"
        :key="index"
        :pageNumber="index"
      />
    </div>
  </div>
</template>

<style scoped>
progress::-moz-progress-bar {
  background: #ee6b03;
}
progress::-webkit-progress-value {
  background: #ee6b03;
}
progress {
  color: #ee6b03;
}
</style>
