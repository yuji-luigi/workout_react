import { useParams } from "react-router";
import { useEffect, useState } from "react";
import DifficultyButtons from "./DifficultyButtons";
import Clip from "./Clip";
import BackButton from "./BackButton";

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
      const res = await fetch(
        `/api/workouts/${ref}`
        // `http://localhost:4000/workouts?id=${ref}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <BackButton clickEvent={() => window.history.back()} />
      <div className=" mt-12 flex flex-col justyfy-center">
        {workout && (
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase m-3">{workout.name}</h1>

            <p className="px-10 mb-6">{workout.description}</p>
            <Clip video={workout.video} />
          </div>
        )}
      </div>
    </>
  );
};

export default SingleWorkout;
