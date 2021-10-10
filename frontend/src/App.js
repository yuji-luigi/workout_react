// Refactor the DB @ Routinepa.js 38 39
// Difficulty Button default style(selected) in Routinepage

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import RoutinesOfTheWeek from "./components/RoutinesOfTheWeek";
import RoutinePage from "./components/RoutinePage";
import CategoriesOverview from "./components/CategoriesOverview";
import CategoriesPage from "./components/CategoriesPage";
import SingleWorkout from "./components/SingleWorkout";

function App() {
  // Here this is good use case of typescript!!

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

  return (
    <Router>
      <div className="bg-green-300">
        <Header />
        <Route path="/" exact>
          <RoutinesOfTheWeek weeklyRoutines={weeklyRoutines} />
          <div className="flex flex-col text-dark bg-yellow-200 mt-2 p-3 shadow-lg">
            <div className="flex content-center justify-between">
              <h2 className="font-bold text-xl mx-3">Search By Categories!</h2>
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
      </div>
    </Router>
  );
}

export default App;
