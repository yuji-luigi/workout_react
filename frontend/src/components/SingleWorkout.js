import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import DifficultyButtons from "./DifficultyButtons";
import Clip from "./Clip";

const SingleWorkout = () => {
  const { id } = useParams();

  const [workout, setWorkout] = useState("");
  const [level, setLevel] = useState("begginer");

  useEffect(() => {
    const getSingleWorkout = async () => {
      const singleWorkoutFromServer = await fetchSingleWorkout();
      setWorkout(singleWorkoutFromServer);
    };
    getSingleWorkout();
  }, [level]);

  const changeLevel = (difficluty) => {
    setLevel(difficluty);
  };

  const fetchSingleWorkout = async () => {
    const res = await fetch(`http://localhost:4000/workout?id=${id}`);
    const [data] = await res.json();
    return data;
  };

  let video;
  switch (level) {
    case "begginer":
      video = workout.videoBeg;
      break;

    case "intermediate":
      video = workout.videoInter;
      break;

    case "expert":
      video = workout.videoAdv;
      break;
    default:
      video = null;
  }

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
          <h1 className="uppercase">{level}</h1>
          <p>{workout.description}</p>
          <Clip video={workout.video} />
        </div>
      </>
    </div>
  );
};

export default SingleWorkout;
