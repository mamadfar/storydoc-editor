import React, { FC } from "react";
import {
  IEditableInput,
  IEditableSection,
} from "../../model/editableSection.model";

const EditableInput: FC<
  Pick<IEditableSection, "inputClassName" | "fontSize"> & IEditableInput
> = ({
  doesEditing,
  inputClassName,
  fontSize,
  inputRef,
  editableStr,
  setEditableStr,
  onBlurHandler,
}) => {
  return (
    <input
      id="editable-input"
      className={`editable-section__input ${doesEditing ? "w-100" : ""} ${
        inputClassName || ""
      } font-${fontSize}`}
      ref={inputRef}
      disabled={!doesEditing}
      value={editableStr}
      type="text"
      onChange={(e) => setEditableStr(e.target.value)}
      onBlur={onBlurHandler}
    />
  );
};
export default EditableInput;
