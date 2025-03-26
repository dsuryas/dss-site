import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetail />,
  },
]);

export default router;
