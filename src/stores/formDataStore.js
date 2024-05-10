import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useformDataStore = defineStore("formDataStore", {
  state: () => ({
    form: {
      start: {
        dateComlition: { value: "", isError: false },
        vacancy: { value: "", isError: false },
        branch: { value: "", isError: false },
        goCheck: { value: false },
      },
    },
  }),

  actions: {},
});
