import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import DashBord from "../Component/DashBord/DashBord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<DashBord></DashBord>
        }
    ]
  },
]);
