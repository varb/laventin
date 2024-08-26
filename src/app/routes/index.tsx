import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "app/layouts";

import PrivateRoute from "./PrivateRoute";
import { RouteNames } from "shared/model/route-names";
import HomePage from "pages/home";

const TrackPage = lazy(() =>
  import("pages/track").then(({ TrackPage }) => ({
    default: TrackPage,
  }))
);
const EditTrackPage = lazy(() =>
  import("pages/track").then(({ EditTrackPage }) => ({
    default: EditTrackPage,
  }))
);
const TrackListPage = lazy(() =>
  import("pages/track-list").then(({ TrackListPage }) => ({
    default: TrackListPage,
  }))
);
const AddTrackPage = lazy(() =>
  import("pages/track-list").then(({ AddTrackPage }) => ({
    default: AddTrackPage,
  }))
);
const SignInPage = lazy(() => import("pages/sign-in"));
const NotFoundPage = lazy(() => import("pages/not-found"));

const router = createBrowserRouter([
  {
    id: "root",
    path: RouteNames.root,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: RouteNames.tracks,
        element: <TrackListPage />,
      },
      {
        path: RouteNames.addTrack,
        element: (
          <PrivateRoute>
            <AddTrackPage />
          </PrivateRoute>
        ),
      },
      {
        path: `${RouteNames.tracks}/:id`,
        element: <TrackPage />,
      },
      {
        path: `${RouteNames.tracks}/:id/edit`,
        element: (
          <PrivateRoute>
            <EditTrackPage />
          </PrivateRoute>
        ),
      },
      { path: RouteNames.signIn, element: <SignInPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function AppRouter() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
