import RoutineOfTheWeek from "./RoutineOfTheWeek";

const RoutinesOfTheWeek = ({ weeklyRoutines, header }) => {
  return (
    <div className="bg-green-400 shadow">
      <div className="h-0 w-full  z-0">
        <img className="mx-auto" src="/images/forest_bg.jpg" alt="" />
      </div>
      <div className="flex text-center w-screen z-20 flex-col h-auto overflow-visible m-auto pt-3">
        <h4 className="pb-1 mb-2 w-3/5 mx-auto border-b-4 border-white font-bold text-xl text-white	">
          Weekly Programs
        </h4>

        <div className="container bg-gray-100 w-screen bg-opacity-30 rounded-lg">
          <h4 className=" pb-1 w-3/5 mx-auto  font-bold text-xl text-white	">
            {header}
          </h4>
          <div className="flex overflow-x-scroll  w-full overflow-visible scroll-snap-x-mandatory  pb-10">
            <div className=" flex-none mx-auto w-10/12 text-center ">
              <div className="w-10/12 "></div>
            </div>
            {weeklyRoutines.map((routine, index) => (
              <RoutineOfTheWeek key={index} routine={routine} />
            ))}

            <div className=" flex-none mx-auto w-10/12 text-center ">
              <div className="w-10/12 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RoutinesOfTheWeek.defaultProps = {
  header: "Routines of the week!!",
};

export default RoutinesOfTheWeek;
