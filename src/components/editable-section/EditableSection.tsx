import React, { FC, useState, useRef, useEffect } from "react";
import "./EditableSection.scss";
import { Icon } from "../index";
import { IEditableSection } from "../../model/editableSection.model";
import { EditableInput, EditableInputLabel } from "../editable-input";

/**
 * @param {string} placeholder a text for editing
 * @param {string} inputClassName add new class to input tag
 * @param {string} labelClassName add new class to label tag
 * @param {string} buttonClassName add new class to button tag
 * @param {string} fontSize change the size of label and input text
 * @param {function} onBlurInput change the input text on blur
 * */
const EditableSection: FC<IEditableSection> = ({
  placeholder,
  inputClassName,
  labelClassName,
  buttonClassName,
  fontSize = "lg",
  onBlurInput,
}) => {
  const [doesEditing, setDoesEditing] = useState(false);
  const [editableStr, setEditableStr] = useState(
    placeholder || "Insert Text Here"
  );
  const inputRef = useRef<null | HTMLInputElement>(null);

  const editHandler = () => {
    setDoesEditing(true);
  };

  const onBlurHandler = () => {
    setDoesEditing(false);
    if (onBlurInput) onBlurInput(editableStr);
  };

  useEffect(() => {
    if (doesEditing) {
      inputRef.current?.focus();
    }
  }, [doesEditing]);

  return (
    <>
      <div className="editable-section">
        {doesEditing ? (
          <EditableInput
            inputRef={inputRef}
            editableStr={editableStr}
            setEditableStr={setEditableStr}
            doesEditing={doesEditing}
            onBlurHandler={onBlurHandler}
            fontSize={fontSize}
            inputClassName={inputClassName}
          />
        ) : (
          <EditableInputLabel
            editableStr={editableStr}
            labelClassName={labelClassName}
            fontSize={fontSize}
          />
        )}
        {!doesEditing && (
          <button
            className={`editable-section__btn ms-1 ${buttonClassName || ""}`}
            onClick={editHandler}
          >
            <Icon fontSize={fontSize} />
          </button>
        )}
      </div>
    </>
  );
};

export default EditableSection;
