import React, { useState, useEffect } from "react";

const WorkoutCounter = ({
  setPlayVideo,
  playVideo,
  workout,
  restClicked,
  repsClicked,
  currentStatus,
}) => {
  let [time, setTime] = useState(5);
  const alert = (msg) => {
    window.alert(msg);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        clearInterval(interval);
        // alert("time up!!");
      }
      time >= 0 && setTime(time--);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onRest = () => {
    restClicked();
  };

  return (
    <div className="fixed w-screen top-0 z-20 h-40 bg-yellow-200">
      <div className="relative">
        <button
          onClick={() => setPlayVideo(!playVideo)}
          className="absolute left-3 top-44 btn bg-white  "
        >
          back
        </button>
      </div>
      <div className="">
        <h1 className="mx-auto">{workout.name}</h1>
        <div className="flex m-0 p-0 border-black border-t-2 border-b-2">
          <h1>Sets</h1>
          {currentStatus &&
            currentStatus.reps.map((key, index) => (
              <h1 className=" m-0 px-4 border-l-2 border-black ">
                {`No${index + 1}: ${key.count}`}
              </h1>
            ))}
        </div>
        <h1>Rest Time {workout.restTime}</h1>
        <button className="btn bg-white mx-1" onClick={() => repsClicked()}>
          reps
        </button>
        <button className="btn bg-white mx-1" onClick={() => onRest()}>
          rest!
        </button>
      </div>
    </div>
  );
};

export default WorkoutCounter;
