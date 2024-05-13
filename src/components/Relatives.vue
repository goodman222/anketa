<script setup>
import { toRefs } from "vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import { useformDataStore } from "../stores/formDataStore";

const formDataStore = useformDataStore();
const store = formDataStore.form.family.relatives;

const { index } = defineProps({
  index: Number,
});

// const { index } = toRefs(props);

function deleteItem() {
  store.splice(index, 1);
}
</script>
<template>
  <div>
    <div class="flex flex-row mb-5 md:flex-col">
      <AppInput
        type="text"
        placeholder="Мать"
        title="Стпень родства"
        category="family"
        arrayName="relatives"
        :index="index"
        fieldName="degree"
        :inArray="true"
        class="mr-4"
      />
      <AppInput
        type="text"
        placeholder="Калинина Алина Сергеевна"
        title="ФИО"
        category="family"
        arrayName="relatives"
        :index="index"
        fieldName="fullName"
        :inArray="true"
      />
    </div>
    <div class="w-1/2 mb-5 md:w-full">
      <AppInput
        type="date"
        title="Дата рождения"
        category="family"
        arrayName="relatives"
        :index="index"
        fieldName="birthday"
        :inArray="true"
      />
    </div>
    <AppInput
      type="text"
      title="Место работы, должность, место проживания"
      placeholder="г. Москва, улица Ленина"
      category="family"
      arrayName="relatives"
      :index="index"
      fieldName="workPlace"
      :inArray="true"
      class="mb-5"
    />
    <AppButton @click.stop.prevent="deleteItem" color="grey" class="mr-5 mb-5"
      >Удалить</AppButton
    >
  </div>
</template>
