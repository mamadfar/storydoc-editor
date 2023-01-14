import React, { DragEvent, FC, useState } from "react";
import { EditableSection, Icon } from "../../../components";
import { useEditor } from "../../../hooks/useEditor";
import { ISectionsList } from "../../../model/editableSection.model";

const SectionsList: FC<ISectionsList> = ({
  data,
  setIconId,
  onBlurHandler,
}) => {
  const [dragId, setDragId] = useState<string>("");
  const { orderChanger } = useEditor();

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    setDragId(e.currentTarget.id);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    orderChanger(dragId, e.currentTarget.id);
  };

  return (
    <>
      {data
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <div
            key={item.id}
            id={item.id}
            draggable={true}
            onDragStart={handleDrag}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Icon
              icon={item.icon.name}
              style={{ fontSize: 80 }}
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
          </div>
        ))}
    </>
  );
};
export default SectionsList;
