import React, { useState } from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
const SettingRoutine = ({ clickEvent, statusArray }) => {
  const [settingOn, toggleSetting] = useState(false);

  const onClick = () => {
    toggleSetting(!settingOn);
    clickEvent();
  };

  return (
    <>
      <button
        onClick={() => onClick()}
        className="btn md:hidden bg-green-300 text-2xl rounded-full hover:bg-green-200"
      >
        <I icon={faCogs} />
      </button>
      {settingOn && (
        <div className="border-2 absolute   border-white ">
          {statusArray.map((key) => (
            <li>{key.name}</li>
          ))}
        </div>
      )}
    </>
  );
};

export default SettingRoutine;
