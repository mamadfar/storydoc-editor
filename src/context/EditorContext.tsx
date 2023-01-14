import { createContext } from "react";
import { IEditorContext } from "../model/context.model";

const EditorContext = createContext<IEditorContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  iconChanger: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  textChanger: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  orderChanger: () => {},
  listOfData: [],
});

export default EditorContext;
