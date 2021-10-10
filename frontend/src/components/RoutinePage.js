// Get the workout id to link to singleworkout page

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DifficultyButtons from "./DifficultyButtons";
import WorkoutList from "./WorkoutList";
import BackButton from "./BackButton";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import StartWorkout from "./StartWorkout";

const RoutinePage = () => {
  const [routines, setRoutines] = useState("");
  const [level, setLevel] = useState("advanced");
  const [playVideo, setPlayVideo] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [workoutIds, setWorkoutIds] = useState("");

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
    return data;
  };

  useEffect(() => {
    if (routines) {
      // @DB routines.workouts = [{ref: 1}, ...{}] => [1, ,2 ,3]
      // Then this code block is unnecessary.
      const workoutRefs = routines.workouts.map((key) => {
        return key.ref;
      });
      fetchAndSetWorkoutsByLevel(workoutRefs);
    }
    return setWorkouts([]);
  }, [routines, level]);

  const fetchAndSetWorkoutsByLevel = async (refs) => {
    refs.forEach(async (ref) => {
      const res = await fetch(`http://localhost:4000/workouts/${ref}`);
      const data = await res.json();
      const id = data.id;
      const [targetWorkout] = data.variation_byLevel.filter((key) => {
        return key.level === level;
      });
      setWorkouts((workout) => [...workout, { targetWorkout, id }]);
    });
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
          <StartWorkout playVideo={playVideo} setPlayVideo={setPlayVideo} />
        </>
      ) : (
        <>
          <I
            onClick={() => setPlayVideo(!playVideo)}
            icon={faPlay}
            className="mt-3 mx-auto text-4xl cursor-pointer hover:text-white"
          />

          <WorkoutList
            changeLevel={changeLevel}
            level={level}
            workouts={workouts}
            workoutIds={workoutIds}
          />
        </>
      )}
    </div>
  );
};

export default RoutinePage;
