import React from "react";

const BackBtn = (onclick, arg2) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={() => onclick(arg2)}
        className="btn absolute  right-5 bg-gray-200 hover:bg-gray-100 "
      >
        Back
      </button>
    </div>
  );
};

export default BackBtn;
