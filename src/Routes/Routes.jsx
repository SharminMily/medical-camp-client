import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
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