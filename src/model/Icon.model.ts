import { CSSProperties } from "react";

export type Icons_type =
  | "favorite"
  | "thumb_up"
  | "face"
  | "edit"
  | "thumb_down"
  | "person"
  | "close"
  | "done"
  | "add"
  | "pie_chart";

export interface IIcon {
  icon?: Icons_type | string;
  fontSize?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export interface IMockSectionEditableData {
  id: string;
  order: number;
  icon: {
    name: Icons_type;
    // fontSize: number
  };
  heading: string;
  sub_heading: string;
}

export interface IIconsList {
  iconId: string;
  onClose: () => void;
}
