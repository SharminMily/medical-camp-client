import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
// import Services from "../pages/Services/Services";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddCamp from "../pages/AddCamp/AddCamp";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import AddCamps from "../pages/Dashboard/AddCamps/AddCamps";

import Healthcare from "../pages/Dashboard/Healthcare/Healthcare";
import Camps from "../pages/Camps/Camps";
import AllUsers from "../pages/Dashboard/AllUsers/AllUSers";
import OrganizerProfile from "../pages/Dashboard/Organizer/OrganizerProfile";
import AddACamp from "../pages/Dashboard/Organizer/AddACamp";
import ManageCamp from "../pages/Dashboard/Organizer/ManageCamp";
import RegisteredCamps from "../pages/Dashboard/Organizer/RegisteredCamps";
import ParticipantProfile from "../pages/Dashboard/Participants/ParticipantProfile";
import PRegisteredCamp from "../pages/Dashboard/Participants/PRegisteredCamp";
import PaymentHistory from "../pages/Dashboard/Participants/PaymentHistory";
import FeedbackRatings from "../pages/Dashboard/Participants/FeedbackRatings";
import PopularCampDetails from "../pages/Home/PopularCamp/PopularCampDetails";
import AdminRoute from "./AdminRoute";
import UpdateCamp from "../pages/Dashboard/Organizer/UpdateCamp";




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
        path: 'camps',
        element: <Camps></Camps>
      },
      {
        path: 'availableCamps',
        element: <PrivateRoute><AvailableCamps></AvailableCamps></PrivateRoute>
      },
      {
        path: 'popularCampDetails/:id',
        element: <PrivateRoute><PopularCampDetails></PopularCampDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/camps/${params.id}`)
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
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      //  Organizer Routes
      {
        path: "organizerProfile",
        element: <AdminRoute><OrganizerProfile></OrganizerProfile></AdminRoute>
      },
      {
        path: "addACamp",
        element: <AdminRoute><AddACamp></AddACamp></AdminRoute>
      },
      {
        path: "manageCamps",
        element: <AdminRoute><ManageCamp></ManageCamp></AdminRoute>
      },
      {
        path: "updateCamp/:id",
        element: <AdminRoute><UpdateCamp></UpdateCamp></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/camps/${params.id}`)
      },
      {
        path: "registeredCamp",
        element: <AdminRoute><RegisteredCamps></RegisteredCamps></AdminRoute>
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },

      // Participant Routes
      {
        path: "participantProfile",
        element: <ParticipantProfile></ParticipantProfile>
      },
      {
        path: "registeredCamps",
        element: <PRegisteredCamp></PRegisteredCamp>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "feedbackRatings",
        element: <FeedbackRatings></FeedbackRatings>
      },
      // 
      {
        path: "healthcare",
        element: <Healthcare></Healthcare>
      },

      {
        path: "addCamp",
        element: <AddCamps></AddCamps>
      },

    ]
  },

]);