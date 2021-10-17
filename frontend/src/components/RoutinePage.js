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

  const { routine_id } = useParams();
  useEffect(() => {
    const getRoutines = async () => {
      const { routine } = await fetchRoutine();
      setRoutines(routine);
    };
    getRoutines();
    return () => setWorkouts([]);
  }, [level]);

  const fetchRoutine = async () => {
    const res = await fetch(
      `/api/routines/${routine_id}`
      // `http://localhost:4000/routines?routine_id=${routine_id}`
    );
    const { routine, workouts, workoutIds } = await res.json();

    // SET WORKOUT
    for (let i = 0; i < workouts.length; i++) {
      const workoutsVari = workouts[i].variation_byLevel;
      const [workoutByLevel] = workoutsVari.filter((key) => {
        return key.level === level;
      });
      const id = workoutIds[i];
      console.log(workoutByLevel);
      setWorkouts((workout) => [...workout, { workoutByLevel, id }]);
    }
    return { routine };
  };

  // useEffect(() => {
  //   if (routines) {
  //     const getAndSetWorkouts = async () => {
  //       for (let i = 0; i < routines.workouts.length; i++) {
  //         const ref = routines.workouts[i];
  //         await fetchAndSetWorkoutsByLevel(ref);
  //       }
  //     };
  // getAndSetWorkouts();
  //   const workoutRefs = routines.workouts.forEach(async (ref) => {
  //     await fetchAndSetWorkoutsByLevel(ref);
  //   });
  // }
  // return () => setWorkouts([]);
  // }, [routines, level]);

  const fetchAndSetWorkoutsByLevel = async (ref) => {
    const res = await fetch(
      `/api/workouts/${ref}`
      // `http://localhost:4000/workouts/${ref}`
    );
    const data = await res.json();
    const id = await data.id;
    console.log(id);
    const [workoutByLevel] = await data.variation_byLevel.filter((key) => {
      return key.level === level;
    });
    setWorkouts((workout) => [...workout, { workoutByLevel, id }]);
  };

  const changeLevel = (difficluty) => {
    setLevel(difficluty);
  };

  return (
    <>
      <div className="container">
        <BackButton />
        <DifficultyButtons changeLevel={changeLevel} />
        <h1 className="uppercase mt-3">{level}</h1>
      </div>

      {playVideo ? (
        <>
          <StartWorkout
            playVideo={playVideo}
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
