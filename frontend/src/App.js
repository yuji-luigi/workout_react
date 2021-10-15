// @StartWorkout.js
// add array of reps and sets length of sets number
// initial value of 0
//  rest button to switch to the next index of reps
// end of the array function that slide to next workout

// Also add the config functionality
// config rest time, reps and sets.
// at the and of the workout, write the record and save it for
// good UX
// Record => workoutname: pullup, reps[firstset, secondset, thirdset]

// Refactor the DB @ Routinepage.js 38 39
// Difficulty Button default style(selected) in Routinepage

import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import RoutinesOfTheWeek from "./components/RoutinesOfTheWeek";
import RoutinePage from "./components/RoutinePage";
import CategoriesOverview from "./components/CategoriesOverview";
import CategoriesPage from "./components/CategoriesPage";
import SingleWorkout from "./components/SingleWorkout";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  // Here this is good use case of typescript!!

  console.log(width);
  const weeklyRoutines = [
    {
      id: 1,
      title: "Upperbody Strength",
      type: "upperbody",
      image: "/images/dumbells.jpg",
      video: "",
      description:
        "Try this routine to tone your upper body. Hit Chest, arms, back and shoulders",
      link: "/1",
    },
    {
      id: 2,
      type: "pushday",
      image: "/images/pushup.jpg",
      description:
        "Good value for your Push day! Focused on hypertrophy for this week!",
      link: "/2",
    },
    {
      id: 3,
      type: "pullday",
      image: "/images/pullup.jpg",
      description: "Try this pull day routine for your max strength grow!!",
      link: "/3",
    },
  ];
  const byCategories = [
    {
      id: 1,
      title: "Upperbody",
      type: "upperbody",
      image: "/videos/ringdip1.mp4",
      description:
        "Try this routine to tone your upper body. Hit Chest, arms, back and shoulders",
      link: "/routines/upperbody/1",
    },
    {
      id: 2,
      type: "Push",
      image: "/videos/ringdip1.mp4",
      description:
        "Good value for your Push day! Focused on hypertrophy for this week!",
      link: "/routines/pushday/1",
    },
    {
      id: 3,
      type: "Pull",
      image: "/videos/reardeltrows.mp4",
      description: "Try this pull day routine for your max strength grow!!",
      link: "/routines/pullday/1",
    },
    {
      id: 4,
      type: "Leg",
      description: "Try this pull day routine for your max strength grow!!",
      iframeLink: "https://www.youtube.com/embed/kvLSkIY0ozA",
    },
    {
      id: 5,
      type: "Abs",
      image: "/images/pullup.jpg",
      description: "Try this pull day routine for your max strength grow!!",
      link: "/routines/pullday/1",
    },
  ];

  useEffect(() => {
    window.addEventListener("resize", (e) => resize(e));
    return () => {
      window.removeEventListener("resize", (e) => resize(e));
    };
  }, []);
  const resize = (e) => {
    setWidth(window.innerWidth);
  };
  return (
    <Router>
      <div className="bg-green-300">
        <Header />
        <div className="mt-10">
          {width < 780 ? (
            <>
              <Route path="/" exact>
                <RoutinesOfTheWeek weeklyRoutines={weeklyRoutines} />
                <div className="flex flex-col text-dark bg-yellow-200 mt-2 p-3 shadow-lg">
                  <div className="flex content-center justify-between">
                    <h2 className="font-bold text-xl mx-3">
                      Search By Categories!
                    </h2>
                    <h1 className="mr-9 font-bold p-2 rounded-full cursor-pointer ">
                      Show more
                    </h1>
                  </div>
                  <div className="flex overflow-x-scroll scroll-snap-x-mandatory">
                    {byCategories.map((category, index) => (
                      <CategoriesOverview key={index} category={category} />
                    ))}
                  </div>
                </div>
              </Route>
              <Route path="/routines/:routine_id" exact>
                <RoutinePage />
              </Route>
              <Route path="/workout/:workout_id/:levelSelected" exact>
                <SingleWorkout />
              </Route>
              <Route path="/routines/" exact>
                <CategoriesPage />
              </Route>
              )
            </>
          ) : (
            <div className="flex flex-col justify-center items-center h-screen">
              <h1>Please make the screen smaller...</h1>
              <h1>This page is optimised for small screens.</h1>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
