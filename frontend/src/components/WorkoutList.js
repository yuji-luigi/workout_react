import React from "react";

import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts, workoutIds, level }) => {
  return (
    <>
      <div className="flex justify-center flex-col ">
        <h1 className="font-bold text-lg mx">{workouts.title}</h1>
        <h4>Start Workout!!</h4>
      </div>
      {workouts.map((workout, index) => (
        <WorkoutCard
          key={index}
          level={level}
          workout={workout.targetWorkout}
          workoutIds={workout.id}
        />
      ))}
    </>
  );
};

export default WorkoutList;
