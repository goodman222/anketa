<script setup>
const props = defineProps({
  color: String,
});
</script>

<template>
  <div>
    <button
      class="font-bold text-sm p-3 rounded-2xl min-w-36"
      :class="props.color"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.orange {
  background-color: #ee6b03;
  color: white;
  border: none;
}

.grey {
  background-color: white;
  color: #9d9d9d;
  border: 2px #9d9d9d solid;
}
</style>
