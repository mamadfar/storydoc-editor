import React, { useEffect, useState } from "react";
import "./App.scss";
import MainLayout from "./layout/MainLayout";
import Editor from "./pages/editor/Editor";
import EditorProvider from "./hooks/useEditor";
import { getDataService } from "./service/data.service";
import { IMockSectionEditableData } from "./model/Icon.model";

function App() {
  const [dataList, setDataList] = useState<
    ReadonlyArray<IMockSectionEditableData>
  >([]);

  const getDataList = async () => {
    try {
      const { data } = await getDataService();
      setDataList(data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getDataList();
  }, []);

  return (
    <MainLayout>
      {dataList.length ? (
        <EditorProvider data={dataList}>
          <Editor />
        </EditorProvider>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
}

export default App;
