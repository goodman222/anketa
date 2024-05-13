<script setup>
import Backround from "./Background.vue";
import HomePage from "./HomePage.vue";

import { useformDataStore } from "../stores/formDataStore";

const { currentPage } = defineProps({
  currentPage: Number,
});

const formDataStore = useformDataStore();
formDataStore.setCurrentPage(currentPage);
</script>

<template>
  <div>
    <Backround class="absolute"></Backround>
    <div
      class="w-screen h-screen relative flex flex-col lg:px-10 lg:py-40 py-48 px-24"
    >
      <HomePage />
    </div>
  </div>
</template>
