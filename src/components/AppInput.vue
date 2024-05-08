<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  title: String,
});
</script>

<template>
  <div>
    <h2 class="font-semibold mb-2">{{ props.title }}</h2>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      class="bg-backgrundGrey text-active placeholder-disActive text-sm p-3 rounded-2xl outline-none w-full"
    />
  </div>
</template>
