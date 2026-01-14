import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import Landing from "./landing/landing";
import NotFound from "./not-found/not-found";
import MainLayout from "./components/layouts/main-layouts";
import ProjectDetail from "./landing-details/landing-details";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            // loader: authLoader,
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <Landing />
              </Suspense>
            ),
          },
          {
            path: "/project/:projectId",
            // loader: authLoader,
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                <ProjectDetail />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
