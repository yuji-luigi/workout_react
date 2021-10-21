import { Link } from "react-router-dom";
import React from "react";

const WorkoutCard = ({ workout, workoutIds, level, index }) => {
  return (
    <div className="flex border-t-2 border-b-2 border-green-500 bg-green-200 w-screen justify-center items-center my-1">
      <div className="flex flex-col">
        <span className="mr-2">Excersize</span>

        <span className="mr-2">No.{index + 1}</span>
      </div>
      <Link to={`/workout/${workoutIds}/${level}`}>
        <div
          title="Show detail"
          className="bg-white  flex w-96 my-2 mx-auto py-3 rounded-lg cursor-pointer"
        >
          <img className=" h-20 w-20 ml-2" src={workout.image} alt="" />
          <div className="flex flex-col items-start">
            <h4 className="mb-0 ml-2  font-bold text-lg">{workout.name}</h4>
            <p className="mb-0 ml-2 font-bold ">3 sets of 8 reps</p>
            <p className="mb-0 ml-2 font-bold ">rest time 60 sec</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutCard;
