// Get the workout id to link to singleworkout page

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DifficultyButtons from "./DifficultyButtons";
import WorkoutList from "./WorkoutList";
import BackButton from "./BackButton";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import StartWorkout from "./StartWorkout";
import SettingRoutine from "./SettingRoutine";
import SettingList from "./SettingList";

const RoutinePage = () => {
  const [routines, setRoutines] = useState("");
  const [level, setLevel] = useState("advanced");
  const [playVideo, setPlayVideo] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [statusArray, setStatusArray] = useState([]);
  const [settingOn, toggleSetting] = useState(false);

  const { routine_id } = useParams();
  useEffect(() => {
    const fetchRoutine = async () => {
      const res = await fetch(`/api/routines/${routine_id}`);
      const { routine, workouts, workoutIds } = await res.json();

      // SET WORKOUT
      for (let i = 0; i < workouts.length; i++) {
        const workoutsVari = workouts[i].variation_byLevel;
        const [workoutByLevel] = workoutsVari.filter((key) => {
          return key.level === level;
        });
        const id = workoutIds[i];
        setWorkouts((workout) => [...workout, { workoutByLevel, id }]);
      }
      return { routine };
    };
    const getRoutines = async () => {
      const { routine } = await fetchRoutine();
      setRoutines(routine);
    };
    getRoutines();
    return () => setWorkouts([]);
  }, [level, routine_id]);

  useEffect(() => {
    const getWorkoutStatuses = () => {
      const statuses = [];
      for (let i = 0; i < workouts.length; i++) {
        const workout = {};
        workout.name = workouts[i].workoutByLevel.name;
        workout.finished = false;
        workout.goalReps = "(Not set)";
        workout.id = i;
        workout.reps = [];
        for (let j = 0; j < workouts[i].workoutByLevel.sets; j++) {
          workout.reps.push({ count: 0, finished: false });
        }
        statuses.push(workout);
      }
      return statuses;
    };
    setStatusArray(getWorkoutStatuses());
  }, [workouts]);

  const changeLevel = (difficluty) => {
    setLevel(difficluty);
  };

  const onClick = () => {
    toggleSetting(!settingOn);
  };

  return (
    <>
      {playVideo ? (
        <BackButton clickEvent={() => setPlayVideo(!playVideo)} />
      ) : (
        <BackButton clickEvent={() => window.history.back()} />
      )}

      <div className="container">
        <DifficultyButtons changeLevel={changeLevel} />
        <h1 className="uppercase mt-3">{level}</h1>
      </div>
      <button
        onClick={() => onClick()}
        className="btn top-20 bg-green-300 text-2xl rounded-full hover:bg-green-200"
      >
        <I icon={faCogs} />
      </button>
      {settingOn && <SettingList statusArray={statusArray} />}
      {playVideo ? (
        <>
          <StartWorkout
            playVideo={playVideo}
            statusArray={statusArray}
            setPlayVideo={setPlayVideo}
            workouts={workouts}
            level={level}
          />
        </>
      ) : (
        <div className="container">
          <I
            onClick={() => setPlayVideo(!playVideo)}
            icon={faPlay}
            className="mt-3 mx-auto text-4xl cursor-pointer hover:text-white"
          />

          <WorkoutList
            changeLevel={changeLevel}
            level={level}
            workouts={workouts}
          />
        </div>
      )}
    </>
  );
};

export default RoutinePage;
