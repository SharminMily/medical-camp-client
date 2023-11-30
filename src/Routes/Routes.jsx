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
import ContactUs from "../pages/ContactUs/ContactUs";


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
        path: 'availableCamps',
        element: <PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
      },
      {
        path: 'addCamp',
        element: <PrivateRoute><AddCamp></AddCamp></PrivateRoute>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
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