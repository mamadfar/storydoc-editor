import React, { useState } from "react";
import "./Editor.scss";
import { EditableSection, IconsList } from "../../components/index";
import { useEditor } from "../../hooks/useEditor";
import { TEXT_TYPE } from "../../model/context.model";
import SectionsList from "./components/SectionsList";
import { IMockSectionEditableData } from "../../model/Icon.model";

// const Ahmad: any = ({ Man }: any) => {
//   return <Man />;
// };

const Editor = () => {
  const [iconId, setIconId] = useState<string | 0>(0);
  const { textChanger, listOfData } = useEditor();
  const [data] = useState<IMockSectionEditableData[]>([...listOfData]);

  const onBlurHandler = (text: string, type: TEXT_TYPE, iconId: string) => {
    textChanger(text, type, iconId);
  };

  return (
    <>
      {!!iconId && <IconsList iconId={iconId} onClose={() => setIconId(0)} />}
      <div className="">
        <EditableSection placeholder="Insert a title here" fontSize="xl" />
      </div>
      <div className="editor__content">
        <SectionsList
          data={data}
          setIconId={setIconId}
          onBlurHandler={onBlurHandler}
        />
      </div>
    </>
  );
};

export default Editor;
