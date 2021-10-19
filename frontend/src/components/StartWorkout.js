// currentindexsetter currentindex has delay problem!

import { useState, useEffect } from "react";
import WorkoutCounter from "./WorkoutCounter";
import RoutineVideo from "./RoutineVideo";
import SettingRoutine from "./SettingRoutine";
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
  let [restTime, setRestTime] = useState(10);
  const [onRest, toggleOnRest] = useState(false);

  useEffect(() => {
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

    const scrollElements = document.querySelectorAll(".routine-videos");
    setJsScrolls(scrollElements);
    clipsHeightsSetter(scrollElements);
    setStatusArray(getWorkoutStatuses());
  }, [workouts]);

  useEffect(() => {
    setCurrentStatus(statusArray[indexWorkoutNow]);
  }, [statusArray, indexWorkoutNow]);

  const clipsHeightsSetter = (el) => {
    setScrollsHeights([]);
    el.forEach((el) => {
      const height = el.getBoundingClientRect().top;
      setScrollsHeights((array) => [...array, height]);
    });
  };

  const restClicked = () => {
    const btn = document.getElementById("restbtn");
    btn.disabled = true;
    toggleOnRest(!onRest);
    const alarm = new Audio("/sounds/simple.wav");
    const timerActivate = setInterval(() => {
      setRestTime(--restTime);
      if (restTime === 3) {
        alarm.play();
      }
      if (restTime === 0) {
        btn.disabled = false;
        clearInterval(timerActivate);
        setTimeout(() => {
          setRestTime(10);
        }, 1000);
      }
    }, 1000);
    setReps(0);
    const index = getSetIndex();
    setCurrentSetIndex(index);
    if (currentStatus.finished === true) return;
    currentSetStatusSetter(index);
  };

  const getSetIndex = () => {
    const finishedArray = currentStatus.reps.map((key) => {
      return key.finished;
    });
    const index = finishedArray.indexOf(false) + 1;
    return index;
  };

  const currentSetStatusSetter = (index) => {
    if (currentSetIndex >= currentStatus.reps.length - 1) {
      currentStatus.reps[currentSetIndex].finished = true;
      currentStatus.finished = true;
      return;
    } else {
      currentStatus.reps[index - 1].finished = true;
      setCurrentStatus(currentStatus);
    }
  };

  const repsClicked = (num) => {
    if (currentStatus.finished === false) {
      setReps(reps + num);
    }
  };

  useEffect(() => {
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
    getsetWorkoutNowIndex();
  }, [scrollsHeights, indexWorkoutNow]);

  useEffect(() => {
    setWorkoutNow(workouts[indexWorkoutNow].workoutByLevel);
    setCurrentStatus(statusArray[indexWorkoutNow]);
  }, [indexWorkoutNow, statusArray, workouts]);

  useEffect(() => {
    currentStatus && setReps(currentStatus.reps[currentSetIndex].count);
  }, [currentStatus, restTime, currentSetIndex]);

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

  const settingClicked = () => {
    console.log(statusArray);
  };

  return (
    <>
      <SettingRoutine
        statusArray={statusArray}
        clickEvent={() => settingClicked()}
      />
      <WorkoutCounter
        workout={workoutNow}
        indexWorkoutNow={indexWorkoutNow}
        setPlayVideo={setPlayVideo}
        playVideo={playVideo}
        statusArray={statusArray}
        setIndex={currentSetIndex}
        currentStatus={currentStatus}
        restTime={restTime}
        repsClicked={(num) => repsClicked(num)}
        restClicked={() => restClicked()}
      />
      <div
        className="container overflow-y-scroll h-screen-80 scroll-snap-y-proximity"
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
