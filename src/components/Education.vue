<script setup>
import { toRefs } from "vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import { useformDataStore } from "../stores/formDataStore";

const props = defineProps({
  index: Number,
  educationType: String,
});

const { index, educationType } = toRefs(props);

const formDataStore = useformDataStore();
const store = formDataStore.form.education[educationType.value];

function deleteItem() {
  console.log(store.value);
  store.splice(index.value, 1);
}
</script>

<template>
  <div>
    <div v-if="educationType === 'basic'">
      <div class="flex flex-row mb-5">
        <AppInput
          type="date"
          title="Дата поступления"
          category="education"
          arrayName="basic"
          :index="index"
          fieldName="dateStart"
          :inArray="true"
          class="mr-4"
        />
        <AppInput
          type="date"
          title="Дата окончания"
          category="education"
          arrayName="basic"
          :index="index"
          fieldName="dateEnd"
          :inArray="true"
        />
      </div>
      <AppInput
        type="text"
        placeholder="Московский Государственный Университет"
        title="Наименование учебного заведения"
        category="education"
        arrayName="basic"
        :index="index"
        fieldName="organizationName"
        :inArray="true"
        class="mb-5"
      />
      <div class="flex flex-row mb-5">
        <AppInput
          type="text"
          title="Факультет"
          placeholder="Психология"
          category="education"
          arrayName="basic"
          :index="index"
          fieldName="faculty"
          :inArray="true"
          class="mr-4"
        />
        <AppInput
          type="text"
          title="Специальность"
          placeholder="Психолог"
          category="education"
          arrayName="basic"
          :index="index"
          fieldName="speciality"
          :inArray="true"
        />
      </div>
    </div>
    <div v-else-if="educationType === 'additional'">
      <div class="flex flex-row mb-5">
        <AppInput
          type="date"
          title="Дата поступления"
          category="education"
          arrayName="additional"
          :index="index"
          fieldName="dateStart"
          :inArray="true"
          class="mr-4"
        />
        <AppInput
          type="date"
          title="Дата окончания"
          category="education"
          arrayName="additional"
          :index="index"
          fieldName="dateEnd"
          :inArray="true"
        />
      </div>
      <AppInput
        type="text"
        placeholder="Сибирская Сервисная Компания"
        title="Наименование организации проводившей обучение"
        category="education"
        arrayName="additional"
        :index="index"
        fieldName="organizationName"
        :inArray="true"
        class="mb-5"
      />

      <AppInput
        type="text"
        title="Название курса/семинара"
        placeholder='"Буровое мастерство"'
        category="education"
        arrayName="additional"
        :index="index"
        fieldName="faculty"
        :inArray="true"
        class="mr-4 mb-5"
      />
    </div>
    <AppButton @click.stop.prevent="deleteItem" color="grey" class="mr-5 mb-5"
      >Удалить</AppButton
    >
  </div>
</template>
