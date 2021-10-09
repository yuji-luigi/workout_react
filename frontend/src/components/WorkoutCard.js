import { Link } from "react-router-dom";
import React, { useState } from "react";

const WorkoutCard = ({ workout }) => {
  return (
    <>
      <Link to={`/workout/${workout.id}`}>
        <div
          title="Show detail"
          className="bg-white flex  m-3 py-3 rounded-lg cursor-pointer"
        >
          <img
            className="mx-auto justify-self-center	self-center h-20 w-20 ml-2"
            src={workout.image}
            alt=""
          />
          <div className="">
            <h4 className="mb-0 font-bold text-lg">{workout.name}</h4>
            <p className="my-1 mx-3 ">{workout.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WorkoutCard;
