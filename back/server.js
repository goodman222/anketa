import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import fs from "fs";
import * as docx from "docx";

import {
  ExternalHyperlink,
  HeadingLevel,
  ImageRun,
  Paragraph,
  patchDocument,
  PatchType,
  Table,
  TableCell,
  TableRow,
  TextDirection,
  TextRun,
  VerticalAlign,
  WidthType,
  BorderStyle,
} from "docx";
import { log } from "console";

const app = express();

app.use(express.json());

async function patchFile(file, data) {
  const arrayEducation = getArrayEducation(data.education.basic);
  //   const arrayEducation = [
  //     new TableRow({
  //       children: [
  //         new TableCell({
  //           children: [new Paragraph({ text: "Образование не указано" })],
  //         }),
  //       ],
  //     }),
  //   ];
  patchDocument(fs.readFileSync("./back/template.docx"), {
    data: file,
    patches: {
      //   start_dateComlition: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.start.dateComlition.value)],
      //   },
      //   start_vacancy: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.start.vacancy.value)],
      //   },
      //   start_branch: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.start.branch.value)],
      //   },

      //   personal_lastName: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.lastName.value)],
      //   },
      //   personal_name: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.name.value)],
      //   },
      //   personal_surname: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.surname.value)],
      //   },
      //   personal_birthday: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.birthday.value)],
      //   },
      //   personal_birthPlace: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.birthPlace.value)],
      //   },
      //   personal_passSeries: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.passSeries.value)],
      //   },
      //   personal_passNumber: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.passNumber.value)],
      //   },
      //   personal_passDate: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.passDate.value)],
      //   },
      //   personal_passPlace: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.passPlace.value)],
      //   },
      //   personal_INN: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.INN.value)],
      //   },
      //   personal_SNILS: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.SNILS.value)],
      //   },
      //   personal_email: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.email.value)],
      //   },
      //   personal_phoneNumber: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.phoneNumber.value)],
      //   },
      //   personal_morePhoneNumber: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.personal.morePhoneNumber.value)],
      //   },
      //   family_familyStatus: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.familyStatus.value)],
      //   },
      //   family_children: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.children.value)],
      //   },
      //   family_registrationAddress: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.registrationAddress.value)],
      //   },
      //   family_residentialAddress: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.residentialAddress.value)],
      //   },
      //   family_driveLicense: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.driveLicense.value)],
      //   },
      //   family_driveCategory: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.driveCategory.value)],
      //   },
      //   family_driveExperience: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.driveExperience.value)],
      //   },
      //   family_criminal: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.criminal.value)],
      //   },
      //   family_abroad: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.family.abroad.value)],
      //   },
      //   moreInfo_relatives: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.relatives.value)],
      //   },
      //   moreInfo_business: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.business.value)],
      //   },
      //   moreInfo_hobby: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.hobby.value)],
      //   },
      //   moreInfo_otherCity: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.otherCity.value)],
      //   },
      //   moreInfo_dismissal: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.dismissal.value)],
      //   },
      //   moreInfo_salaryNow: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.salaryNow.value)],
      //   },
      //   moreInfo_salaryWants: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.salaryWants.value)],
      //   },
      //   moreInfo_workStart: {
      //     type: PatchType.PARAGRAPH,
      //     children: [new TextRun(data.moreInfo.workStart.value)],
      //   },

      //   table: {
      //     type: PatchType.DOCUMENT,
      //     children: [
      //       new Table({
      //         rows: [
      //           new TableRow({
      //             children: [
      //               new TableCell({
      //                 children: [new Paragraph({ text: 123 })],
      //                 width: { size: 13, type: WidthType.PERCENTAGE },
      //                 borders: {
      //                   left: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                   right: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                 },
      //               }),
      //               new TableCell({
      //                 children: [new Paragraph({ text: 345 })],
      //                 width: { size: 11.1, type: WidthType.PERCENTAGE },
      //                 borders: {
      //                   left: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                   right: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                 },
      //               }),
      //               new TableCell({
      //                 children: [new Paragraph({ text: "bottom to top" })],
      //                 width: { size: 34.1, type: WidthType.PERCENTAGE },

      //                 borders: {
      //                   left: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                   right: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                 },
      //               }),
      //               new TableCell({
      //                 children: [new Paragraph({ text: "top to bottom" })],
      //                 width: { size: 18, type: WidthType.PERCENTAGE },

      //                 borders: {
      //                   left: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                   right: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                 },
      //               }),
      //               new TableCell({
      //                 children: [new Paragraph({ text: "top to bottom" })],
      //                 width: { size: 23.5, type: WidthType.PERCENTAGE },

      //                 borders: {
      //                   left: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                   right: {
      //                     style: BorderStyle.SINGLE,
      //                     color: "000000",
      //                     size: 14,
      //                   },
      //                 },
      //               }),
      //             ],
      //           }),
      //         ],
      //         width: { size: 99, type: WidthType.PERCENTAGE },
      //       }),
      //     ],
      //   },

      // таблицы

      educationBasic: {
        type: PatchType.DOCUMENT,
        children: [
          new Table({
            rows: arrayEducation,
            width: { size: 99, type: WidthType.PERCENTAGE },
          }),
        ],
      },
    },
  }).then((doc) => {
    fs.writeFileSync("./back/anketa.docx", doc);
  });
}

function getArrayEducation(arr) {
  if (arr.length === 0) {
    return [
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({ text: "Образование не указано" })],
          }),
        ],
      }),
    ];
  }
  return arr.map((item, widthArray) => {
    return new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({ text: item.dateStart.value })],
          width: { size: 13, type: WidthType.PERCENTAGE },
          borders: {
            left: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
            right: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
          },
        }),
        new TableCell({
          children: [new Paragraph({ text: item.dateEnd.value })],
          width: { size: 11.1, type: WidthType.PERCENTAGE },
          borders: {
            left: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
            right: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
          },
        }),
        new TableCell({
          children: [new Paragraph({ text: item.organizationName.value })],
          width: { size: 34.1, type: WidthType.PERCENTAGE },

          borders: {
            left: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
            right: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
          },
        }),
        new TableCell({
          children: [new Paragraph({ text: item.faculty.value })],
          width: { size: 18, type: WidthType.PERCENTAGE },

          borders: {
            left: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
            right: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
          },
        }),
        new TableCell({
          children: [new Paragraph({ text: item.speciality.value })],
          width: { size: 23.5, type: WidthType.PERCENTAGE },

          borders: {
            left: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
            right: {
              style: BorderStyle.SINGLE,
              color: "000000",
              size: 14,
            },
          },
        }),
      ],
    });
  });
}

const myRow = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph({ text: 123 })],
      width: { size: 13, type: WidthType.PERCENTAGE },
      borders: {
        left: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
        right: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
      },
    }),
    new TableCell({
      children: [new Paragraph({ text: 345 })],
      width: { size: 11.1, type: WidthType.PERCENTAGE },
      borders: {
        left: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
        right: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
      },
    }),
    new TableCell({
      children: [new Paragraph({ text: "bottom to top" })],
      width: { size: 34.1, type: WidthType.PERCENTAGE },

      borders: {
        left: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
        right: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
      },
    }),
    new TableCell({
      children: [new Paragraph({ text: "top to bottom" })],
      width: { size: 18, type: WidthType.PERCENTAGE },

      borders: {
        left: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
        right: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
      },
    }),
    new TableCell({
      children: [new Paragraph({ text: "top to bottom" })],
      width: { size: 23.5, type: WidthType.PERCENTAGE },

      borders: {
        left: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
        right: {
          style: BorderStyle.SINGLE,
          color: "000000",
          size: 14,
        },
      },
    }),
  ],
});

app.post("/saveFile", async (req, res) => {
  let templateFile;

  fs.readFile("./back/template.docx", (error, data) => {
    templateFile = data;
    patchFile(templateFile, req.body);
  });
});

ViteExpress.listen(app, 5173, () => console.log("Server is listening..."));
