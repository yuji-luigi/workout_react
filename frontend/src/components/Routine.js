import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import OneWorkout from "./OneWorkout";

const Routine = ({ match }) => {
  const [routine, setRoutine] = useState(null);
  const [videoOn, toggleVideoOn] = useState(false);

  const { routine_id, category } = useParams();

  // Think about the structure of database
  // Where and how to store the data in which shape
  // How to manage to it to become more scalable data structure

  useEffect(() => {
    const getRoutine = async () => {
      const routineFromServer = await fetchRoutine();
      setRoutine(routineFromServer);
    };
    getRoutine();
  }, []);
  const fetchRoutine = async () => {
    const res = await fetch(
      `http://localhost:4000/routines?routine_id=${routine_id}`
    );
    const [data] = await res.json();
    return data;
  };

  return (
    <div className="container">
      <div className="flex justify-end">
        <Link to="/">
          <button className="btn absolute top-15 right-5 bg-yellow-200 ">
            Back
          </button>
        </Link>
      </div>
      {routine && <h1 className="font-bold text-lg mx">{routine.title}</h1>}
      <h3>Chose your level</h3>
      {routine
        ? routine.sets.map((set, index) => <OneWorkout key={index} set={set} />)
        : null}
    </div>
  );
};

export default Routine;
