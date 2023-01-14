import { Icons_type, IMockSectionEditableData } from "./Icon.model";

export type TEXT_TYPE = "heading" | "sub_heading";

export type ACTION_TYPE =
  | { type: "ICON"; payload: { icon: Icons_type; iconId: string } }
  | {
      type: "INPUT";
      payload: { text: string; type: TEXT_TYPE; iconId: string };
    }
  | { type: "ORDER"; payload: { dragId: string; eventId: string } };

export interface IEditorContext {
  iconChanger: (icon: Icons_type, iconId: string) => void;
  textChanger: (text: string, type: TEXT_TYPE, iconId: string) => void;
  orderChanger: (dragId: string, eventId: string) => void;
  listOfData: ReadonlyArray<IMockSectionEditableData>;
}
