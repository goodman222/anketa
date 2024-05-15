<script setup>
import Backround from "./Background.vue";
import AppButton from "./AppButton.vue";
</script>

<template>
  <Backround class="absolute"></Backround>
  <div
    class="w-screen h-screen relative flex flex-col lg:px-10 lg:py-40 py-48 px-24"
  >
    <h1 class="uppercase text-4xl text-white l:text-3xl font-bold mt-16">
      Спасибо за заявку!
    </h1>
    <p class="text-white text-xl l:text-lg font-medium mt-2">
      Мы обязательно свяжемся с Вами
    </p>
    <div class="flex flex-row mt-12 l:flex-col">
      <a href="https://www.sibserv.com/">
        <AppButton color="orange mr-4">На гланый сайт</AppButton>
      </a>
      <a href="https://vk.com/sibservcom" class="block h-11 mr-4 l:mt-3"
        ><img src="../img/vk.png" alt=""
      /></a>
      <a href="https://t.me/sibservofficial" class="block h-11 l:mt-3"
        ><img src="../img/tg.png" alt=""
      /></a>
    </div>
  </div>
</template>
