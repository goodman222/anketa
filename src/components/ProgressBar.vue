<script setup>

const  {progress}  = defineProps({
    progress: Number,
});
console.log('progress: ' + progress);
</script>

<template>
    <div class="w-full bg-[#D9D9D9] h-3  rounded">
        <div class="bg-orange h-3 rounded" :style="{width: `${progress}%`}">&nbsp;</div>
    </div>
</template>