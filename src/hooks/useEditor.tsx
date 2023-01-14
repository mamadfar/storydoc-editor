import React, {
  FC,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { Icons_type, IMockSectionEditableData } from "../model/Icon.model";
import { ICON, INPUT, ORDER } from "../constants/Icons.constants";
import { ACTION_TYPE, IEditorContext, TEXT_TYPE } from "../model/context.model";
import EditorContext from "../context/EditorContext";

export const useEditor = () => {
  const editorContext = useContext(EditorContext);

  if (!editorContext) throw new Error("Something went wrong!");

  return editorContext;
};

interface IInitialState {
  listOfData: IMockSectionEditableData[];
}

// const initialState = {
//     listOfData: [...MOCK_SECTION_EDITABLE_DATA]
// };

const editorReducer = (state: IInitialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case ICON: {
      const data = [...state.listOfData];
      const filteredItem = data.find(
        (item) => item.id === action.payload.iconId
      );
      if (filteredItem) filteredItem.icon.name = action.payload.icon;
      return { ...state, listOfData: data };
    }
    case INPUT: {
      const data = [...state.listOfData];
      const filteredItem = data.find(
        (item) => item.id === action.payload.iconId
      );
      if (filteredItem) filteredItem[action.payload.type] = action.payload.text;
      return { ...state, listOfData: data };
    }
    case ORDER: {
      const copiedData = [...state.listOfData];
      const dragSection = copiedData.find(
        (item) => item.id === action.payload.dragId
      );
      const dropSection = copiedData.find(
        (item) => item.id === action.payload.eventId
      );

      const dragSectionOrder = dragSection?.order;
      const dropSectionOrder = dropSection?.order;

      const newSectionState = copiedData.map((item) => {
        if (item.id === action.payload.dragId)
          item.order = dropSectionOrder || item.order;
        if (item.id === action.payload.eventId)
          item.order = dragSectionOrder || item.order;
        return item;
      });
      return { ...state, listOfData: newSectionState };
    }
    default:
      return { ...state };
  }
};

const EditorProvider: FC<{
  children: ReactNode;
  data: ReadonlyArray<IMockSectionEditableData>;
}> = ({ children, data }) => {
  const [state, dispatch] = useReducer(editorReducer, {
    listOfData: [...data],
  });

  const value: IEditorContext = {
    listOfData: state.listOfData,
    iconChanger: useCallback(
      (icon: Icons_type, iconId: string) => {
        dispatch({ type: ICON, payload: { icon, iconId } });
      },
      [dispatch, state]
    ),
    textChanger: useCallback(
      (text: string, type: TEXT_TYPE, iconId: string) => {
        dispatch({ type: INPUT, payload: { text, type, iconId } });
      },
      [dispatch, state]
    ),
    orderChanger: useCallback(
      (dragId: string, eventId: string) => {
        dispatch({ type: ORDER, payload: { dragId, eventId } });
      },
      [dispatch, state]
    ),
  };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorProvider;
