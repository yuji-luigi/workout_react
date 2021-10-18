import React, { useState, useEffect } from "react";
import BackButton from "./BackButton";

const WorkoutCounter = ({
  restTime,
  setPlayVideo,
  playVideo,
  workout,
  restClicked,
  repsClicked,
  currentStatus,
  setIndex,
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
      <div className="relative top-10">
        <div className="flex justify-end">
          <BackButton clickEvent={() => setPlayVideo(!playVideo)} />
        </div>
      </div>
      <div className="">
        <h1 className="uppercase ml-3 ">-{workout.name}-</h1>

        <div className="flex justify-between flex-row">
          <div className="">
            <div className="flex w-36 justify-self-start  flex-col">
              <h1>Rest Time </h1>
              <h1>{restTime}sec</h1>
              <button
                id="restbtn"
                className="btn w-16 mx-auto bg-white"
                onClick={() => onRest()}
              >
                REST
              </button>
            </div>
          </div>
          <div className="justify-self-center self-center">
            <div className="flex  flex-col border-black border-2  items-center">
              <h1 className="uppercase">reps?</h1>
              <div className="flex mx-auto justify-center border-t-2 border-black items-center">
                <button
                  className="btn bg-white"
                  onClick={() => repsClicked(-1)}
                >
                  -
                </button>
                <h1>
                  {currentStatus &&
                    setIndex < currentStatus.reps.length &&
                    currentStatus.reps[setIndex].count}
                </h1>
                <button className="btn bg-white" onClick={() => repsClicked(1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="w-36 h-16"></div>
        </div>
        <div className="flex  m-0 p-0 border-black border-t-2 border-b-2">
          <h1>Sets</h1>
          {currentStatus &&
            currentStatus.reps.map((key, index) => (
              <h1 className=" m-0 px-4 border-l-2 border-black ">
                {`No${index + 1}: ${key.count}`}
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCounter;
