import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Donation from "./Pages/Donation";
import Statistics from "./Pages/Statistics";
import Details from "./Pages/Details";
import { Toaster } from "react-hot-toast";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donate-details/:id",
        element: <Details />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>
);
