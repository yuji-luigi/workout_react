import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DifficultyButtons from "./DifficultyButtons";
import Clip from "./Clip";

const SingleWorkout = () => {
  let { workout_id, levelSelected } = useParams();
  const [workout, setWorkout] = useState("");
  const [level, setLevel] = useState(levelSelected);

  useEffect(() => {
    const getSingleWorkout = async (ref) => {
      const oneTypeOfWorkoutFromServer = await fetchOneTypeOfWorkout(ref);
      const [targetWorkout] =
        oneTypeOfWorkoutFromServer.variation_byLevel.filter((key) => {
          return key.level === level;
        });
      console.log(targetWorkout);
      setWorkout(targetWorkout);
    };
    getSingleWorkout(workout_id);
  }, [level]);

  const changeLevel = (difficluty) => {
    setLevel(difficluty);
  };
  const fetchOneTypeOfWorkout = async (ref) => {
    try {
      const res = await fetch(`http://localhost:4000/workouts?id=${ref}`);
      const [data] = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container ">
      <button
        onClick={() => window.history.back()}
        className="btn absolute top-15 right-5 bg-green-200 hover:bg-green-100 "
      >
        Back
      </button>
      <DifficultyButtons changeLevel={changeLevel} />

      <>
        <div className="  flex flex-col justyfy-center">
          <h1 className="mb-3">{workout.name}</h1>
          <h1 className="uppercase">{workout.level}</h1>
          <p>{workout.description}</p>
          <Clip video={workout.video} />
        </div>
      </>
    </div>
  );
};

export default SingleWorkout;
