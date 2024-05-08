<script setup>
const props = defineProps({
  fileName: String,
});

const src = `../img/${props.fileName}`;
</script>

<template>
  <div
    class="w-16 h-16 rounded-full bg-[#FBE1CB] flex justify-center items-center"
  >
    <img src="../img/home.png" alt="" />
  </div>
</template>
