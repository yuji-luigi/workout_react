import { Link } from "react-router-dom";
const RoutineOfTheWeek = ({ routine }) => {
  return (
    <div className="m-3 flex-none w-11/12 text-center px-3 cursor-pointer snap-center">
      <Link to={`/routines${routine.link}`}>
        <div className="w-11/12 m-auto py-4 px-2 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h1 className="font-bold pb-3">{routine.type}</h1>
          <img
            className="w-72 h-48 w-auto m-auto rounded-lg"
            src={routine.image}
            alt=""
          />
          <p className="px-3">{routine.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default RoutineOfTheWeek;
