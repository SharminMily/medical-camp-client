import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddCamp from "../pages/AddCamp/AddCamp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'services',
        element: <Services></Services>
      },
      {
        path: 'addCamp',
        element: <AddCamp></AddCamp>
      },
      {
        path: 'availableCamps',
        element: <PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
      },
    //   {
    //     path: 'availableCamps',
    //     element: <AvailableCamps></AvailableCamps>
    //   },
     ]
  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  },
  {
    path: '/register',
    element: <Register></Register>
  }

]);