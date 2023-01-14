import { Icons_type, IMockSectionEditableData } from "../model/Icon.model";

const ICONS_NAME: ReadonlyArray<Icons_type> = [
  "favorite",
  "thumb_up",
  "face",
  "edit",
  "thumb_down",
  "person",
  "close",
  "done",
  "add",
  "pie_chart",
];

const MOCK_SECTION_EDITABLE_DATA: ReadonlyArray<IMockSectionEditableData> = [
  {
    id: "section_1",
    order: 1,
    icon: {
      name: "favorite",
    },
    heading: "",
    sub_heading: "Add here your additional text",
  },
  {
    id: "section_2",
    order: 2,
    icon: {
      name: "pie_chart",
    },
    heading: "",
    sub_heading: "Add here your additional text",
  },
  {
    id: "section_3",
    order: 3,
    icon: {
      name: "thumb_up",
    },
    heading: "",
    sub_heading: "Add here your additional text",
  },
];

export const getDataService = () => {
  return new Promise<{ data: ReadonlyArray<IMockSectionEditableData> }>(
    (resolve) => {
      setTimeout(() => {
        resolve({
          data: MOCK_SECTION_EDITABLE_DATA,
        });
      }, 1500);
    }
  );
};
export const getIconsNameService = () => {
  return new Promise<{ data: ReadonlyArray<Icons_type> }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: ICONS_NAME,
      });
    }, 1000);
  });
};
