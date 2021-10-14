// currentindexsetter currentindex has delay problem!

import { useState, useEffect } from "react";
import WorkoutCounter from "./WorkoutCounter";
import RoutineVideo from "./RoutineVideo";

const StartWorkout = ({ setPlayVideo, playVideo, workouts, level }) => {
  const [jsScrolls, setJsScrolls] = useState([]);
  const [scrollsHeights, setScrollsHeights] = useState([]);
  const [indexWorkoutNow, setIndexWorkoutNow] = useState(0);
  const [workoutNow, setWorkoutNow] = useState("");
  const [statusArray, setStatusArray] = useState([]);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("");
  const [render, toggleRender] = useState(true);
  const [reps, setReps] = useState(0);
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".routine-videos");
    setJsScrolls(scrollElements);
    clipsHeightsSetter(scrollElements);
    setStatusArray(getWorkoutStatuses());
  }, []);

  useEffect(() => {
    setCurrentStatus(statusArray[indexWorkoutNow]);
  }, [statusArray]);

  const clipsHeightsSetter = (el) => {
    setScrollsHeights([]);
    el.forEach((el) => {
      const height = el.getBoundingClientRect().top;
      setScrollsHeights((array) => [...array, height]);
    });
  };

  const getWorkoutStatuses = () => {
    const statuses = [];
    for (let i = 0; i < workouts.length; i++) {
      const workout = {};
      workout.name = workouts[i].workoutByLevel.name;
      workout.finished = false;
      workout.reps = [];
      for (let j = 0; j < workouts[i].workoutByLevel.sets; j++) {
        workout.reps.push({ count: 0, finished: false });
      }
      statuses.push(workout);
    }
    return statuses;
  };

  const restClicked = () => {
    setReps(0);
    const finishedArray = currentStatus.reps.map((key) => {
      return key.finished;
    });
    const index = finishedArray.indexOf(false) + 1;
    setCurrentSetIndex(index);

    if (currentStatus.finished === true) return;
    if (currentSetIndex >= currentStatus.reps.length - 1) {
      console.log(currentSetIndex);
      currentStatus.reps[currentSetIndex - 1].finished = true;
      currentStatus.finished = true;
      return;
    } else {
      currentStatus.reps[index - 1].finished = true;
      console.log(currentStatus);
      setCurrentStatus(currentStatus);
    }
  };

  const currentSetIndexSetter = () => {
    // const finishedArray = currentStatus.reps.map((key) => {
    //   return key.finished;
    // });
    // console.log(finishedArray);
    // console.log(finishedArray.indexOf(false));
  };

  const repsClicked = () => {
    if (currentStatus.finished === false) {
      setReps(reps + 1);
    }
  };

  useEffect(() => {
    getsetWorkoutNowIndex();
  }, [scrollsHeights]);

  useEffect(() => {
    setWorkoutNow(workouts[indexWorkoutNow].workoutByLevel);
    setCurrentStatus(statusArray[indexWorkoutNow]);
  }, [indexWorkoutNow]);

  const getCorrectIndexOfSetNow = () => {
    const finishedArray = currentStatus.reps.map((key) => {
      return key.finished;
    });
    let index = finishedArray.indexOf(false);
    if (index < 0) index = 0;
    setCurrentSetIndex(index);
  };

  useEffect(() => {
    if (currentStatus) {
      getCorrectIndexOfSetNow();
    }
  }, [currentStatus]);

  useEffect(() => {
    if (currentStatus) {
      getCorrectIndexOfSetNow();
    }
  }, [currentSetIndex]);
  useEffect(() => {
    if (currentStatus) {
      getCorrectIndexOfSetNow();
      if (currentSetIndex >= currentStatus.reps.length) return;
      currentStatus.reps[currentSetIndex].count = reps;
      toggleRender(!render);
    }
  }, [reps]);
  const getsetWorkoutNowIndex = () => {
    const scrollsInSight = scrollsHeights.map((el) => {
      return el >= 50 && el <= 800;
    });
    let index = scrollsInSight.indexOf(true);
    index = index === -1 ? 0 : index;
    if (indexWorkoutNow !== index) {
      setIndexWorkoutNow(index);
    }
  };

  return (
    <>
      <WorkoutCounter
        workout={workoutNow}
        indexWorkoutNow={indexWorkoutNow}
        setPlayVideo={setPlayVideo}
        playVideo={playVideo}
        statusArray={statusArray}
        currentStatus={currentStatus}
        repsClicked={() => repsClicked()}
        restClicked={() => restClicked()}
      />
      <div
        className="container overflow-y-scroll h-screen-80 scroll-snap-y-mandatory"
        onScroll={() => clipsHeightsSetter(jsScrolls)}
      >
        {workouts.map((workout, index) => (
          <RoutineVideo
            key={index}
            level={level}
            workout={workout.workoutByLevel}
            workoutIds={workout.id}
          />
        ))}
      </div>
    </>
  );
};

export default StartWorkout;
