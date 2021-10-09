import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DifficultyButtons from "./DifficultyButtons";
import WorkoutList from "./WorkoutList";
import BackButton from "./BackButton";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const RoutinePage = () => {
  const [routines, setRoutines] = useState(null);
  const [level, setLevel] = useState("advanced");
  const [playVideo, setPlayVideo] = useState(false);
  const [workoutRefs, setWorkoutRefs] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  const { routine_id } = useParams();
  useEffect(() => {
    const getRoutines = async () => {
      const routineFromServer = await fetchRoutine();
      setRoutines(routineFromServer);
    };
    getRoutines();
  }, []);

  const fetchRoutine = async () => {
    const res = await fetch(
      `http://localhost:4000/routines?routine_id=${routine_id}`
    );
    const [data] = await res.json();
    setDefaultWorkoutRefs(data);
    return data;
  };

  useEffect(() => {
    workoutRefsSetter();
  }, [level]);

  useEffect(() => {
    const workoutSetter = async () => {
      setWorkouts([]);
      workoutRefs && (await fetchAndSetWorkouts());
    };
    workoutSetter();
  }, [workoutRefs]);

  const fetchAndSetWorkouts = async () => {
    workoutRefs.forEach(async (ref) => {
      const res = await fetch(`http://localhost:4000/workout/${ref}`);
      const data = await res.json();
      setWorkouts((workouts) => [...workouts, data]);
    });
  };

  const workoutRefsSetter = () => {
    const refs = getWorkoutRefs();
    setWorkoutRefs(refs);
  };

  const getWorkoutRefs = () => {
    if (routines) {
      const routineByLevel = routines.workouts.filter((key) => {
        return key.level === level;
      });
      const refs = routineByLevel.map((key) => {
        return key.ref;
      });
      return refs;
    }
  };

  const setDefaultWorkoutRefs = (routines) => {
    const defaultWorkouts = routines.workouts.filter((key) => {
      return key.level === "advanced";
    });
    const defaultWorkoutRefs = defaultWorkouts.map((key) => {
      return key.ref;
    });
    setWorkoutRefs(defaultWorkoutRefs);
  };

  const changeLevel = (difficluty) => {
    setLevel(difficluty);
  };

  const startWorkout = () => {
    setPlayVideo(!playVideo);
  };

  return (
    <div className="container">
      <BackButton />
      <DifficultyButtons changeLevel={changeLevel} />
      <h1 className="uppercase mt-3">{level}</h1>
      {playVideo ? (
        <>
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="btn bg-white "
          >
            back
          </button>
        </>
      ) : (
        <>
          <I
            icon={faPlay}
            className="mt-3 mx-auto text-4xl cursor-pointer hover:text-white"
          />

          <WorkoutList
            changeLevel={changeLevel}
            level={level}
            workouts={workouts}
          />
        </>
      )}
    </div>
  );
};

export default RoutinePage;
