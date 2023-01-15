import React, { DragEvent, FC, ReactNode } from "react";
import { IMockSectionEditableData } from "../model/Icon.model";

interface IDraggable {
  children: ReactNode;
  data: ReadonlyArray<IMockSectionEditableData>;
  setData: (newListOfData: IMockSectionEditableData[]) => void;
  id: string;
  dragId: string;
  setDragId: (dragId: string) => void;
}

const Draggable: FC<IDraggable> = ({
  children,
  data,
  setData,
  id,
  dragId,
  setDragId,
}) => {
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    setDragId(e.currentTarget.id);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const copiedData = [...data];
    const dragSection = copiedData.find((item) => item.id === dragId);
    const dropSection = copiedData.find(
      (item) => item.id === e.currentTarget.id
    );

    const dragSectionOrder = dragSection?.order;
    const dropSectionOrder = dropSection?.order;

    const newSectionState = copiedData.map((item) => {
      if (item.id === dragId) item.order = dropSectionOrder || item.order;
      if (item.id === e.currentTarget.id)
        item.order = dragSectionOrder || item.order;
      return item;
    });
    setData(newSectionState);
  };

  return (
    <div
      id={id}
      draggable={true}
      onDragStart={(e) => handleDrag(e)}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {children}
    </div>
  );
};

export default Draggable;
