import { LegacyRef } from "react";
import { IMockSectionEditableData } from "./Icon.model";
import { TEXT_TYPE } from "./context.model";

export type FONT_SIZE_TYPE = "sm" | "md" | "lg" | "xl";

export interface IEditableSection {
  placeholder?: string;
  inputClassName?: string;
  labelClassName?: string;
  buttonClassName?: string;
  fontSize?: FONT_SIZE_TYPE;
  onBlurInput?: (text: string) => void;
}

export interface IEditableInput {
  doesEditing: boolean;
  inputRef: LegacyRef<HTMLInputElement>;
  editableStr: string;
  setEditableStr: (editableStr: string) => void;
  onBlurHandler: () => void;
}

export interface IEditableInputLabel {
  editableStr: string;
  fontSize?: FONT_SIZE_TYPE;
  labelClassName?: string;
}

export interface ISectionsList {
  data: IMockSectionEditableData[];
  setIconId: (iconId: string) => void;
  onBlurHandler: (text: string, type: TEXT_TYPE, iconId: string) => void;
}
