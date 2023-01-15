import React, { FC, useState } from "react";
import { EditableSection, Icon } from "../../../components";
import { useEditor } from "../../../hooks/useEditor";
import { ISectionsList } from "../../../model/editableSection.model";
import Draggable from "../../../components/Draggable";

const SectionsList: FC<ISectionsList> = ({
  data,
  setIconId,
  onBlurHandler,
}) => {
  const [dragId, setDragId] = useState<string>("");
  const { orderChanger } = useEditor();

  return (
    <>
      {data
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <Draggable
            key={item.id}
            data={data}
            setData={orderChanger}
            id={item.id}
            dragId={dragId}
            setDragId={setDragId}
          >
            <Icon
              icon={item.icon.name}
              style={{ fontSize: "5rem" }}
              onClick={() => setIconId(item.id)}
              className="cursor-pointer"
            />
            <EditableSection
              placeholder={item.heading}
              onBlurInput={(text: string) =>
                onBlurHandler(text, "heading", item.id)
              }
            />
            <EditableSection
              placeholder={item.sub_heading}
              fontSize="md"
              onBlurInput={(text: string) =>
                onBlurHandler(text, "sub_heading", item.id)
              }
            />
          </Draggable>
        ))}
    </>
  );
};
export default SectionsList;
