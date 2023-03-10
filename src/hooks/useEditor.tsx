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
    case ORDER:
      return { ...state, listOfData: action.payload };
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
      (newListOfData) => {
        dispatch({ type: ORDER, payload: newListOfData });
      },
      [dispatch, state]
    ),
  };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorProvider;
