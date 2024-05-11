<script setup>
import { useformDataStore } from "../stores/formDataStore";
const formDataStore = useformDataStore();

const props = defineProps({
  pageNumber: Number,
});

let { pageNumber } = props;

// console.log(`pageNumber: ${pageNumber}`);
// console.log(`currentPage: ${formDataStore.currentPage}`);
</script>

<template>
  <div>
    <div class="flex flex-row items-center">
      <div
        class="w-14 h-14 min-w-14 border-[1px] border-orange rounded-full flex justify-center items-center"
        :class="
          pageNumber + 1 <= formDataStore.currentPage
            ? 'bg-orange'
            : 'bg-inherit'
        "
      >
        <p
          class="font-bold text-2xl"
          :class="
            pageNumber + 1 <= formDataStore.currentPage
              ? 'text-white'
              : 'text-orange'
          "
        >
          {{ pageNumber + 1 }}
        </p>
      </div>
      <div class="ml-6">
        <p
          class="uppercase font-bold text-base"
          :class="
            pageNumber + 1 === formDataStore.currentPage
              ? 'text-orange'
              : 'text-black'
          "
        >
          {{ formDataStore.listOfPages[pageNumber] }}
        </p>
      </div>
    </div>
    <div
      v-if="pageNumber + 1 !== formDataStore.listOfPages.length"
      class="w-[3px] h-11 ml-[26px] drop-shadow"
      :class="
        pageNumber + 1 < formDataStore.currentPage
          ? 'bg-orange'
          : 'bg-[#D9D9D9]'
      "
    ></div>
  </div>
</template>
