import React, { FC } from "react";
import { IEditableInputLabel } from "../../model/editableSection.model";

const EditableInputLabel: FC<IEditableInputLabel> = ({
  labelClassName,
  fontSize,
  editableStr,
}) => {
  return (
    <label
      htmlFor="editable-input"
      className={`editable-section__input-label ${
        labelClassName || ""
      } font-${fontSize}`}
    >
      {editableStr}
    </label>
  );
};
export default EditableInputLabel;
