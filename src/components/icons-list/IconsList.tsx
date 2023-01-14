import React, { FC, useEffect, useState } from "react";
import "./IconsList.scss";
import { getIconsNameService } from "../../service/data.service";
import { useEditor } from "../../hooks/useEditor";
import { Icons_type, IIconsList } from "../../model/Icon.model";

const IconsList: FC<IIconsList> = ({ iconId, onClose }) => {
  const [iconsName, setIconsName] = useState<ReadonlyArray<Icons_type>>([]);
  const { iconChanger } = useEditor();

  const iconHandler = (icon: Icons_type) => {
    iconChanger(icon, iconId);
  };

  const getIcons = async () => {
    try {
      const { data } = await getIconsNameService();
      setIconsName(data);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getIcons();
  }, []);

  return (
    <>
      <div className="icons-list">
        {iconsName.length ? (
          <>
            <i
              className="material-icons cursor-pointer icons-list--close"
              onClick={onClose}
            >
              close
            </i>
            {iconsName.map((icon: Icons_type) => (
              <i
                key={icon}
                className="material-icons cursor-pointer"
                onClick={() => iconHandler(icon)}
              >
                {icon}
              </i>
            ))}
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default IconsList;
