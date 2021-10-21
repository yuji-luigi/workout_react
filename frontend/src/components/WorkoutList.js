import React from "react";

import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts, level }) => {
  return (
    <>
      <div className="flex justify-center flex-col ">
        <h1 className="font-bold text-lg mx">{workouts.title}</h1>
        <h4>Start Workout!!</h4>
      </div>
      <div className="flex mx-auto flex-col justify-center items-center">
        {workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            index={index}
            level={level}
            workout={workout.workoutByLevel}
            workoutIds={workout.id}
          />
        ))}
      </div>
    </>
  );
};

export default WorkoutList;
