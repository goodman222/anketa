<script setup>
import Backround from "./Background.vue";
import HomePage from "./HomePage.vue";
</script>

<template>
  <div>
    <Backround class="absolute"></Backround>
    <div class="w-screen h-screen relative flex flex-col py-48 px-24">
      <HomePage />
    </div>
  </div>
</template>
