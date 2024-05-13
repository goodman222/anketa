<script setup>
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import Sidebar from "./Sidebar.vue";
import PageLogo from "./PageLogo.vue";

import { useformDataStore } from "../stores/formDataStore";
import { useRouter } from "vue-router";

const { currentPage } = defineProps({
  currentPage: Number,
});

const formDataStore = useformDataStore();
const store = formDataStore.form.moreInfo;

formDataStore.setCurrentPage(currentPage);

const router = useRouter();
</script>

<template>
  <div>
    <div class="flex flex-row lg:flex-col">
      <Sidebar />
      <div class="pt-24 px-20 w-7/12 lg:w-full lg:pt-10 md:px-10 l:px-5">
        <PageLogo fileName="dop.png" class="mb-12" />
        <form action="" class="mb-10 flex flex-col">
          <fieldset>
            <legend class="font-bold text-xl uppercase mb-8">
              Дополнительная информация
            </legend>
            <AppInput
              type="text"
              placeholder="Да/Нет"
              title="Являетесь ли Вы учредителем, совладельцем, руководителем какой либо Компании? Являетесь ли ИП? Были ли ранее?"
              category="moreInfo"
              fieldName="business"
              class="mb-5"
            />
            <AppInput
              type="text"
              placeholder="Рисую"
              title="Укажите Ваши умения, увлечения, интересы и др. информацию, представляющую интерес для Компании:"
              category="moreInfo"
              fieldName="hobby"
              class="mb-5"
            />
            <AppInput
              type="text"
              placeholder="Да/Нет"
              title="Есть ли у Вас родственники, работающие в Компании (укажите фамилию, имя, отчество)?"
              category="moreInfo"
              fieldName="relatives"
              class="mb-5"
            />
            <div class="flex flex-row items-end mb-5 md:flex-col">
              <AppInput
                type="text"
                placeholder="Да"
                title="Готовы ли Вы работать в других городах?"
                category="moreInfo"
                fieldName="otherCity"
                class="mr-4 md:mr-0"
              />
              <AppInput
                type="text"
                placeholder="Переезд"
                title="Причина увольнения с прежнего места работы?"
                category="moreInfo"
                fieldName="dismissal"
              />
            </div>
            <div class="flex flex-row items-end mb-5 md:flex-col">
              <AppInput
                type="text"
                placeholder="100 тыс."
                title="Ваша зарплата на сегодняшний день (до вычета подоходного налога)?"
                category="moreInfo"
                fieldName="salaryNow"
                class="mr-4 md:mr-0"
              />
              <AppInput
                type="text"
                placeholder="120 тыс."
                title="Желаемая зарплата на новом месте (до вычета подоходного налога)?"
                category="moreInfo"
                fieldName="salaryWants"
              />
            </div>
            <AppInput
              type="text"
              placeholder="Сегодня"
              title="С какого времени Вы можете приступить к работе?"
              category="moreInfo"
              fieldName="workStart"
              class="mb-5"
            />
          </fieldset>
          <fieldset>
            <legend class="font-bold text-xl uppercase mb-8">
              Направляя анкету:
            </legend>
            <AppInput
              type="checkbox"
              title="Я подтверждаю, что информация, изложенная в настоящей анкете, является достоверной и подлинной, а также действительной на настоящий момент."
              category="moreInfo"
              fieldName="trueInfo"
              class="mb-5"
            />
            <AppInput
              type="checkbox"
              title="Об изменении учетных даниых (семейного положения, места проживания и пр.) обязуюсь незамедлительно сообщать в Управление кадров."
              category="moreInfo"
              fieldName="changeInfo"
              class="mb-5"
            />
            <AppInput
              type="checkbox"
              title="С <a href=''class='text-blue-500'>правилами внутреннего трудового распорядка Компании правилами пожарной безопасности</a> ознакомлен."
              category="moreInfo"
              fieldName="rules"
              class="mb-5"
            />
            <AppInput
              type="checkbox"
              title="Я передал эту информацию добровольно и не возражаю против установления ее достоверности."
              category="moreInfo"
              fieldName="voluntarily"
              class="mb-5"
            />
          </fieldset>
          <div class="flex flex-row self-end mt-5 md:flex-col">
            <AppButton @click="router.push('/page-4')" color="grey" class="mr-5"
              >Назад</AppButton
            >
            <AppButton
              class="md:mt-4"
              color="orange"
              @click.prevent="formDataStore.nextPage('moreInfo')"
              >Отправить анкету</AppButton
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
