import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ProfilesPage from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/reactrouter",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  { path: "/reactrouter/profile", element: <ProfilePage /> },
  {
    path: "/reactrouter/profiles",
    element: <ProfilesPage />,
    children: [
      { path: "/reactrouter/profiles/:profileId", element: <ProfilePage /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
