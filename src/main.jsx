import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./Components/ErrorPage/Error";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Private/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import AllTouristsSpot from "./Components/AllTouristsSpot/AllTouristsSpot";
import AddTouristSpot from "./Components/AddTouristSpot/AddTouristSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,  
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/profile',
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/allTouristSpots',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoute>
          <AddTouristSpot></AddTouristSpot>
        </PrivateRoute>
      }
      // {
      //   path:'/estateDetails/:id',
      //   element:<PrivateRoute>
      //     <TourDetails></TourDetails>
      //   </PrivateRoute>
      // },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
