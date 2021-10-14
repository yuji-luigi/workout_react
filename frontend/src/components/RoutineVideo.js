import React, { useEffect, useState } from "react";
import ClipRoutine from "./ClipRoutine";

const RoutineVideo = ({ level, workout, workoutIds }) => {
  return (
    <>
      <div className="routine-videos video-clips flex flex-col pb-10 justify-center h-screen-80 snap-center">
        <h1 className="mt-4 mb-4">{workout.name}</h1>
        <ClipRoutine video={workout.video} />
      </div>
    </>
  );
};

export default RoutineVideo;
