import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./components/layouts/main-layouts";
import Landing from "./landing/landing";
import ProjectDetail from "./landing-details/landing-details";
import NotFound from "./not-found/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <ProtectedRoute />,
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
  // {
  //   path: "/error",
  //   element: <PageError />,
  // },
  // {
  //   path: "/signin",
  //   loader: authLoader,
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <SignIn />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/signup",
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <Register />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/signup/error",
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <ErrorPage />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/request-reset-password",
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <EmailRequestReset />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/reset-password",
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <PasswordReset />
  //     </Suspense>
  //   ),
  // },
  // {
  //   path: "/invalid-invite",
  //   element: (
  //     <Suspense fallback={<PageLoader />}>
  //       <EmailInvitationExpired />
  //     </Suspense>
  //   ),
  // },
]);
