import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../router/index";

export const useformDataStore = defineStore("formDataStore", {
  state: () => ({
    form: {
      start: {
        dateComlition: { value: "", isError: false },
        vacancy: { value: "", isError: false },
        branch: { value: "", isError: false },
        goCheck: { value: false },
      },
      personal: {
        name: { value: "", isError: false },
        lastName: { value: "", isError: false },
        surname: { value: "", isError: false },
        birthday: { value: "", isError: false },
        birthPlace: { value: "", isError: false },
        email: { value: "", isError: false },
        phoneNumber: { value: "", isError: false },
        morePhoneNumber: { value: "", isError: false },
        passSeries: { value: "", isError: false },
        passNumber: { value: "", isError: false },
        passDate: { value: "", isError: false },
        passPlace: { value: "", isError: false },
        INN: { value: "", isError: false },
        SNILS: { value: "", isError: false },
        goCheck: { value: false },
      },
      family: {
        familyStatus: { value: "we", isError: false },
        children: { value: "ee", isError: false },
        registrationAddress: { value: "ee", isError: false },
        residentialAddress: { value: "ee", isError: false },
        abroad: { value: "df", isError: false },
        criminal: { value: "no", isError: false },
        driveLicense: { value: "Нет", isError: false },
        driveCategory: { value: "ff", isError: false },
        driveExperience: { value: "ff", isError: false },
        relatives: [
          {
            degree: { value: "1", isError: false },
            fullName: { value: "2we", isError: false },
            birthday: { value: "", isError: false },
            workPlace: { value: "sdsd", isError: false },
            id: 1,
          },
          {
            degree: { value: "2", isError: false },
            fullName: { value: "e", isError: false },
            birthday: { value: "", isError: false },
            workPlace: { value: "sdsd", isError: false },
            id: 2,
          },
        ],
        goCheck: { value: false },
      },
      education: {
        basic: [
          {
            dateStart: { value: "", isError: false },
            dateEnd: { value: "", isError: false },
            organizationName: { value: "", isError: false },
            faculty: { value: "", isError: false },
            speciality: { value: "", isError: false },
            id: 1,
          },
        ],
        additional: [
          {
            dateStart: { value: "", isError: false },
            dateEnd: { value: "", isError: false },
            organizationName: { value: "", isError: false },
            faculty: { value: "", isError: false },
            id: 1,
          },
        ],
        goCheck: { value: false },
      },

      exp: {
        work: [
          {
            dateStart: { value: "", isError: false },
            dateEnd: { value: "", isError: false },
            organizationName: { value: "", isError: false },
            place: { value: "", isError: false },
            jobTitle: { value: "", isError: false },
            id: 1,
          },
        ],
        goCheck: { value: false },
      },

      moreInfo: {
        business: { value: "", isError: false },
        hobby: { value: "", isError: false },
        relatives: { value: "", isError: false },

        otherCity: { value: "", isError: false },
        dismissal: { value: "", isError: false },
        salaryNow: { value: "", isError: false },
        salaryWants: { value: "", isError: false },
        workStart: { value: "", isError: false },

        trueInfo: { value: "", isError: false },
        changeInfo: { value: "", isError: false },
        rules: { value: "", isError: false },
        voluntarily: { value: "", isError: false },
        goCheck: { value: false },
      },
    },
    currentPage: 0,
    listOfPages: [
      "Личная информация",
      "Проживание и семья",
      "Образование",
      "Опыт Работы",
      "дополнительная Информация",
    ],
  }),

  actions: {
    setCurrentPage(num) {
      this.currentPage = num;
    },

    checkAnswers(obj) {
      console.log("start check");
      let isError = false;
      for (const key in obj) {
        if (key === "goCheck" || key === "id") {
          continue;
        }
        if (Array.isArray(obj[key])) {
          console.log("array!");
          obj[key].forEach((element) => {
            isError = this.checkAnswers(element);
          });
        } else if (!obj[key]["value"]) {
          isError = true;
          // console.log(key);
        }
      }
      return isError;
    },

    nextPage(category) {
      this.form[category]["goCheck"]["value"] =
        !this.form[category]["goCheck"]["value"];
      if (!this.checkAnswers(this.form[category])) {
        if (this.currentPage === 5) {
          router.push(`/endPage`);
          return;
        }
        this.currentPage++;
        // console.log(this.currentPage);
        router.push(`page-${this.currentPage}`);
        console.log("next page-----");
      }
    },

    addItem(category, arrayName, object) {
      let newId = 0;
      let inFuncArray = structuredClone(object);
      this.form[category][arrayName].forEach((el) => {
        if (el.id > newId) {
          newId = el.id;
        }
      });
      inFuncArray.id = newId + 1;

      this.form[category][arrayName].push(inFuncArray);
    },
  },
});
