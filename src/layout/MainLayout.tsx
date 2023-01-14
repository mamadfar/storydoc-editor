import React, { FC, ReactNode } from "react";
import "./MainLayout.scss";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default MainLayout;
