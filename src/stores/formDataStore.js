import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "../router/index";

//Пустая форма!

// form: {
//   start: {
//     dateComlition: { value: "", isError: false },
//     vacancy: {
//       value: "",
//       isError: false,
//     },
//     branch: { value: "", isError: false },
//     goCheck: { value: false },
//   },
//   personal: {
//     name: { value: "", isError: false },
//     lastName: { value: "", isError: false },
//     surname: { value: "", isError: false },
//     birthday: { value: "", isError: false },
//     birthPlace: { value: "", isError: false },
//     email: { value: "", isError: false },
//     phoneNumber: { value: "", isError: false },
//     morePhoneNumber: { value: "", isError: false },
//     passSeries: { value: "", isError: false },
//     passNumber: { value: "", isError: false },
//     passDate: { value: "", isError: false },
//     passPlace: {
//       value: "",
//       isError: false,
//     },
//     INN: { value: "", isError: false },
//     SNILS: { value: "", isError: false },
//     goCheck: { value: false },
//   },
//   family: {
//     familyStatus: { value: "", isError: false },
//     children: { value: "", isError: false },
//     registrationAddress: {
//       value: "",
//       isError: false,
//     },
//     residentialAddress: { value: "", isError: false },
//     abroad: { value: "", isError: false },
//     criminal: { value: "", isError: false },
//     driveLicense: { value: "", isError: false },
//     driveCategory: { value: "", isError: false },
//     driveExperience: { value: "", isError: false },
//     relatives: [
//       {
//         degree: { value: "", isError: false },
//         fullName: { value: "", isError: false },
//         birthday: { value: "", isError: false },
//         workPlace: { value: "", isError: false },
//         id: 1,
//       },
//       {
//         degree: { value: "", isError: false },
//         fullName: { value: "", isError: false },
//         birthday: { value: "", isError: false },
//         workPlace: { value: "", isError: false },
//         id: 2,
//       },
//     ],
//     goCheck: { value: false },
//   },
//   education: {
//     basic: [
//       {
//         dateStart: { value: "", isError: false },
//         dateEnd: { value: "", isError: false },
//         organizationName: { value: "", isError: false },
//         faculty: { value: "", isError: false },
//         speciality: { value: "", isError: false },
//         id: 1,
//       },
//     ],
//     additional: [
//       {
//         dateStart: { value: "", isError: false },
//         dateEnd: { value: "", isError: false },
//         organizationName: { value: "", isError: false },
//         faculty: { value: "", isError: false },
//         id: 1,
//       },
//     ],
//     goCheck: { value: false },
//   },

//   exp: {
//     work: [
//       {
//         dateStart: { value: "", isError: false },
//         dateEnd: { value: "", isError: false },
//         organizationName: { value: "", isError: false },
//         place: { value: "", isError: false },
//         jobTitle: { value: "", isError: false },
//         id: 1,
//       },
//     ],
//     goCheck: { value: false },
//   },

//   moreInfo: {
//     business: { value: "", isError: false },
//     hobby: { value: "", isError: false },
//     relatives: { value: "", isError: false },

//     otherCity: { value: "", isError: false },
//     dismissal: { value: "", isError: false },
//     salaryNow: { value: "", isError: false },
//     salaryWants: { value: "", isError: false },
//     workStart: { value: "", isError: false },

//     trueInfo: { value: "", isError: false },
//     changeInfo: { value: "", isError: false },
//     rules: { value: "", isError: false },
//     voluntarily: { value: "", isError: false },
//     goCheck: { value: false },
//   },
// },

// Заполненная форма!!!---

// form: {
//   start: {
//     dateComlition: { value: "12-05-2024", isError: false },
//     vacancy: {
//       value: "Электромонтер высшего разряда",
//       isError: false,
//     },
//     branch: {
//       value: "ССК-Технологии (ННБ/Буровые растворы)",
//       isError: false,
//     },
//     goCheck: { value: false },
//   },
//   personal: {
//     name: { value: "Иван", isError: false },
//     lastName: { value: "Петров", isError: false },
//     surname: { value: "Владимирович", isError: false },
//     birthday: { value: "23-02-2024", isError: false },
//     birthPlace: { value: "Г. Новосибирск", isError: false },
//     email: { value: "msdfivan@mail.ru", isError: false },
//     phoneNumber: { value: "+79049403212", isError: false },
//     morePhoneNumber: { value: "+79991112233", isError: false },
//     passSeries: { value: "2345", isError: false },
//     passNumber: { value: "123321", isError: false },
//     passDate: { value: "21-01-1781", isError: false },
//     passPlace: {
//       value: "ГУ МВД РОССИИ ПО НОВОСИБИРСКОЙ ОБЛАСТИ",
//       isError: false,
//     },
//     INN: { value: "124325325345", isError: false },
//     SNILS: { value: "124214214214", isError: false },
//     goCheck: { value: false },
//   },
//   family: {
//     familyStatus: { value: "Женат", isError: false },
//     children: { value: "Ксения - 5 лет, Алексей - 10 лет", isError: false },
//     registrationAddress: {
//       value: "г. Москва, Улица пушкина, дом колотушкина, кв. 228",
//       isError: false,
//     },
//     residentialAddress: {
//       value: "Кемеровская обл., пос. Тельбес, ул. Кирова 30",
//       isError: false,
//     },
//     abroad: { value: "Турция, шпионаж 12 лет", isError: false },
//     criminal: { value: "Нет", isError: false },
//     driveLicense: { value: "Да", isError: false },
//     driveCategory: { value: "A, C", isError: false },
//     driveExperience: { value: "5 лет", isError: false },
//     relatives: [
//       {
//         degree: { value: "Мать", isError: false },
//         fullName: { value: "Оксана", isError: false },
//         birthday: { value: "22-12-1967", isError: false },
//         workPlace: { value: "скутеры", isError: false },
//         id: 1,
//       },
//       {
//         degree: { value: "Отец", isError: false },
//         fullName: { value: "Олег", isError: false },
//         birthday: { value: "21-12-2000", isError: false },
//         workPlace: { value: "Школа", isError: false },
//         id: 2,
//       },
//     ],
//     goCheck: { value: false },
//   },
//   education: {
//     basic: [
//       {
//         dateStart: { value: "12-01-2422", isError: false },
//         dateEnd: { value: "12-01-2332", isError: false },
//         organizationName: { value: "НГТУ", isError: false },
//         faculty: { value: "РЭФ", isError: false },
//         speciality: { value: "Радиоэлектроника", isError: false },
//         id: 1,
//       },
//       {
//         dateStart: { value: "12-01-2422", isError: false },
//         dateEnd: { value: "12-01-2332", isError: false },
//         organizationName: { value: "НГТУ", isError: false },
//         faculty: { value: "фэн", isError: false },
//         speciality: { value: "Радироника", isError: false },
//         id: 2,
//       },
//       {
//         dateStart: { value: "12-01-2422", isError: false },
//         dateEnd: { value: "12-01-2332", isError: false },
//         organizationName: { value: "НГТУ", isError: false },
//         faculty: { value: "фэн", isError: false },
//         speciality: { value: "Радироника", isError: false },
//         id: 3,
//       },
//     ],
//     additional: [
//       {
//         dateStart: { value: "22-03.1967", isError: false },
//         dateEnd: { value: "22-03.1968", isError: false },
//         organizationName: { value: "ООО Пошле найух", isError: false },
//         faculty: { value: "Пидорства", isError: false },
//         id: 1,
//       },
//     ],
//     goCheck: { value: false },
//   },

//   exp: {
//     work: [
//       {
//         dateStart: { value: "21-02-2020", isError: false },
//         dateEnd: { value: "21-02-2020", isError: false },
//         organizationName: { value: "Озон", isError: false },
//         place: { value: "Новосибирск", isError: false },
//         jobTitle: { value: "Менеджер", isError: false },
//         id: 1,
//       },
//       {
//         dateStart: { value: "21-02-2020", isError: false },
//         dateEnd: { value: "21-02-2020", isError: false },
//         organizationName: { value: "Додо Пицца", isError: false },
//         place: { value: "Новкузнецк", isError: false },
//         jobTitle: { value: "Пиццамейкер", isError: false },
//         id: 2,
//       },
//       {
//         dateStart: { value: "21-02-2020", isError: false },
//         dateEnd: { value: "21-02-2020", isError: false },
//         organizationName: { value: "Яндекс.Еда", isError: false },
//         place: { value: "Новосибирск", isError: false },
//         jobTitle: { value: "Курьер", isError: false },
//         id: 3,
//       },
//     ],
//     goCheck: { value: false },
//   },

//   moreInfo: {
//     business: {
//       value: "Да, был владельцем ООО 'Рога и копыта'",
//       isError: false,
//     },
//     hobby: {
//       value: "Вырезаю по дереву, строю подводную лодку",
//       isError: false,
//     },
//     relatives: {
//       value: "Да, Зубенко Михаил Петрович, мафиозник",
//       isError: false,
//     },

//     otherCity: { value: "Готов", isError: false },
//     dismissal: { value: "Проспорил директору", isError: false },
//     salaryNow: { value: "500 к/нс", isError: false },
//     salaryWants: { value: "Пачка сухариков 3 корочки", isError: false },
//     workStart: { value: "Да хоть щас", isError: false },

//     trueInfo: { value: true, isError: false },
//     changeInfo: { value: true, isError: false },
//     rules: { value: true, isError: false },
//     voluntarily: { value: true, isError: false },
//     goCheck: { value: false },
//   },
// },

export const useformDataStore = defineStore("formDataStore", {
  state: () => ({
    form: {
      start: {
        dateComlition: { value: "", isError: false },
        vacancy: {
          value: "",
          isError: false,
        },
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
        passPlace: {
          value: "",
          isError: false,
        },
        INN: { value: "", isError: false },
        SNILS: { value: "", isError: false },
        goCheck: { value: false },
      },
      family: {
        familyStatus: { value: "", isError: false },
        children: { value: "", isError: false },
        registrationAddress: {
          value: "",
          isError: false,
        },
        residentialAddress: { value: "", isError: false },
        abroad: { value: "", isError: false },
        criminal: { value: "", isError: false },
        driveLicense: { value: "", isError: false },
        driveCategory: { value: " ", isError: false },
        driveExperience: { value: " ", isError: false },
        relatives: [
          {
            degree: { value: "", isError: false },
            fullName: { value: "", isError: false },
            birthday: { value: "", isError: false },
            workPlace: { value: "", isError: false },
            id: 1,
          },
          {
            degree: { value: "", isError: false },
            fullName: { value: "", isError: false },
            birthday: { value: "", isError: false },
            workPlace: { value: "", isError: false },
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
          //переход на страницу, не убирать!!!------
          router.push(`/endPage`);
          this.saveFile();
          return;
        }
        this.currentPage++;

        router.push(`page-${this.currentPage}`);

        console.log("next page-----");
      }
    },

    async saveFile() {
      console.log("Анкета отправлена!");
      const sendResult = await fetch("./saveFile", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.form),
      });
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
