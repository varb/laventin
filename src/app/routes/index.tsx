import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";

import Layout from "app/layouts";

import TrackListScreen from "modules/TrackListScreen";
import NewTrackScreen from "modules/NewTrackScreen";
import EditTrackScreen from "modules/EditTrackScreen";
import PrivateRoute from "./PrivateRoute";
import { RouteNames } from "shared/model/route-names";

const HomePage = lazy(() => import("pages/home"));
const TrackPage = lazy(() => import("pages/track"));
const SignInPage = lazy(() => import("pages/sign-in"));
const NotFoundPage = lazy(() => import("pages/not-found"));



export default function AppRouter() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path={RouteNames.root} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="t">
              <Route index element={<TrackListScreen />} />
              <Route path=":id">
                <Route index element={<TrackPage />} />
                <Route
                  path="edit"
                  element={
                    <PrivateRoute>
                      <EditTrackScreen />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route
                path="new"
                element={
                  <PrivateRoute>
                    <NewTrackScreen />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path={RouteNames.signIn} element={<SignInPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
