import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import ExercisePage from "../pages/exercise/index";
import ExerciseHomePage from "../pages/exercise/home";
import Exercise1 from "../pages/exercise/exercise1/index";
import Exercise2 from "../pages/exercise/exercise2/index";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home},
      { path : "exercise", 
        Component: ExercisePage,
        children: [
          { index: true, Component: ExerciseHomePage},
          { path: "exercise1", Component: Exercise1},
          { path: "exercise2", Component: Exercise2},

         
        ]
      }
    ],
  },
]);

export default router;