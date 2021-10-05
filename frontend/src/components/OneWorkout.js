import { Link } from "react-router-dom";
import React, { useState } from "react";

const OneWorkout = ({ set, workoutType }) => {
  const [videoDetail, toggleVideoDetail] = useState(false);

  return (
    <>
      <Link to={`/routines/categories/${workoutType}/${set.id}`}>
        <div
          title="Show detail"
          className="bg-white flex  m-3 py-3 rounded-lg cursor-pointer"
          onClick={() => toggleVideoDetail(!videoDetail)}
        >
          <img
            className="mx-auto justify-self-center	self-center h-20 w-20 ml-2"
            src={set.image}
            alt=""
          />
          <div className="">
            <h4 className="mb-0 font-bold text-lg">{set.name}</h4>
            <p className="my-1 mx-3 ">{set.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default OneWorkout;
