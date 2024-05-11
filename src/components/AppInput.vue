<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useformDataStore } from "../stores/formDataStore";

const formDataStore = useformDataStore();

const props = defineProps({
  type: String,
  placeholder: String,
  title: String,
  dropdownAnswers: Array,
  category: String,
  fieldName: String,
  inArray: {
    type: Boolean,
    default: false,
  },
  arrayName: String,
  index: Number,
  headColor: {
    type: String,
    default: "black",
  },
});

let store;

if (props.inArray) {
  store = reactive(
    formDataStore["form"][props.category][props.arrayName][props.index][
      props.fieldName
    ]
  );
} else {
  store = reactive(formDataStore["form"][props.category][props.fieldName]);
}

//Ставим ошибку
watch(
  () => formDataStore["form"][props.category]["goCheck"]["value"],
  () => {
    if (!store.value) {
      store.isError = true;
    }
  }
);

//Убираем ошибку
watch(store, () => {
  if (store.value) {
    store.isError = false;
  }
});

let placeholder = props.placeholder;

const isdropDownOpen = ref(false);

//Значение, отоброжаемое в верхней строчке
const dropdownCurrentAnswer = ref(placeholder);

//Значение, принимаемое формой
const dropdownValue = ref("");

const modelForDate = ref("");

if (props.type === "date") {
  modelForDate.value = props.placeholder;
  store.value = modelForDate.value;
}

function dropdownChoose(item) {
  dropdownCurrentAnswer.value = item;
  dropdownValue.value = item;
  isdropDownOpen.value = !isdropDownOpen.value;
  store.value = dropdownValue.value;
}
</script>

<template>
  <div class="w-full">
    <h2
      v-if="props.type !== 'checkbox'"
      class="font-semibold mb-2"
      :style="{ color: props.headColor }"
    >
      {{ props.title }}
    </h2>

    <div v-if="props.type === 'dropdown'" class="relative cursor-pointer">
      <!-- Верхняя строчка дропдауна -->
      <div
        class="flex flex-row justify-between items-center border-2 bg-backgrundGrey text-sm p-3 rounded-2xl w-full max-h-11"
        @click="isdropDownOpen = !isdropDownOpen"
        :class="{ 'border-red-700': store.isError }"
      >
        <p class="max-h-5 overflow-hidden">{{ dropdownCurrentAnswer }}</p>
        <div>
          <img
            src="../img/vector.png"
            :style="{ transform: isdropDownOpen ? 'rotate(180deg)' : 'none' }"
          />
        </div>
      </div>
      <!-- Выпадающее меню -->
      <div
        v-show="isdropDownOpen"
        class="bg-backgrundGrey text-sm rounded-2xl w-full absolute top-12 max-h-40 overflow-y-auto box-content"
      >
        <div
          v-for="(item, index) in props.dropdownAnswers"
          :key="index"
          class="p-3 border-white border-b-[3px] last:border-0"
          style="border-color: white"
          @click="dropdownChoose(item)"
        >
          <p>{{ item }}</p>
        </div>
      </div>
    </div>

    <input
      v-else-if="props.type === 'date'"
      type="date"
      class="bg-backgrundGrey text-active border-2 placeholder-disActive text-sm p-3 rounded-2xl outline-none w-full"
      :class="{ 'border-red-700': store.isError }"
      v-model="store.value"
      @input="(event) => (formValue = event.target.value)"
    />
    <div v-else-if="props.type === 'checkbox'" class="flex flex-row">
      <input
        type="checkbox"
        class="scale-150 accent-orange"
        :name="props.fieldName"
        :id="props.fieldName"
        v-model="store.value"
      />
      <label
        :for="props.fieldName"
        class="block ml-3"
        :class="{ 'text-red-700': store.isError }"
        v-html="props.title"
      ></label>
    </div>

    <input
      v-else
      :type="props.type"
      :placeholder="placeholder"
      class="border-2 bg-backgrundGrey text-active placeholder-disActive text-sm p-3 rounded-2xl outline-none w-full"
      :class="{ 'border-red-700': store.isError }"
      v-model="store.value"
    />
  </div>
</template>
