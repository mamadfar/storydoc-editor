import React, { FC } from "react";
import { IIcon } from "../model/Icon.model";

const Icon: FC<IIcon> = ({ icon, fontSize, className, style, onClick }) => {
  return (
    <i
      className={`material-icons font-${fontSize} ${className}`}
      style={style}
      onClick={onClick}
    >
      {icon || "edit"}
    </i>
  );
};

export default Icon;
