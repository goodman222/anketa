<script setup>
import { toRefs } from "vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import { useformDataStore } from "../stores/formDataStore";

const props = defineProps({
  index: Number,
});

const { index } = toRefs(props);

const formDataStore = useformDataStore();
const store = formDataStore.form.exp.work;

function deleteItem() {
  console.log(store.value);
  store.splice(index.value, 1);
}
</script>
<template>
  <div>
    <h2>Укажите Ваш опыт</h2>
    <div class="flex flex-row mb-5 md:flex-col">
      <AppInput
        type="date"
        title="Дата поступления"
        category="exp"
        arrayName="work"
        :index="index"
        fieldName="dateStart"
        :inArray="true"
        class="mr-4"
      />
      <AppInput
        type="date"
        title="Дата окончания"
        category="exp"
        arrayName="work"
        :index="index"
        fieldName="dateEnd"
        :inArray="true"
      />
    </div>
    <AppInput
      type="text"
      placeholder="Сибирская Сервисная Компания"
      title="Наименование организации"
      category="exp"
      arrayName="work"
      :index="index"
      fieldName="organizationName"
      :inArray="true"
      class="mb-5"
    />
    <div class="flex flex-row mb-5 md:flex-col">
      <AppInput
        type="text"
        title="Местонахождение"
        placeholder="Нефтеюганск"
        category="exp"
        arrayName="work"
        :index="index"
        fieldName="place"
        :inArray="true"
        class="mr-4"
      />
      <AppInput
        type="text"
        title="Должность"
        placeholder="Электрик"
        category="exp"
        arrayName="work"
        :index="index"
        fieldName="jobTitle"
        :inArray="true"
      />
    </div>
    <AppButton @click.stop.prevent="deleteItem" color="grey" class="mr-5 mb-5"
      >Удалить</AppButton
    >
  </div>
</template>
