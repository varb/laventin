import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import HomeScreen from 'modules/HomeScreen';
import TrackScreen from 'modules/TrackScreen';
import LoginScreen from 'modules/LoginScreen';
import TrackListScreen from 'modules/TrackListScreen';
import NewTrackScreen from 'modules/NewTrackScreen';
import EditTrackScreen from 'modules/EditTrackScreen';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='t'>
            <Route index element={<TrackListScreen />} />
            <Route path=':id'>
              <Route index element={<TrackScreen />} />
              <Route path='edit' element={
                <PrivateRoute>
                  <EditTrackScreen />
                </PrivateRoute>
              } />
            </Route>
            <Route path='new' element={
              <PrivateRoute>
                <NewTrackScreen />
              </PrivateRoute>
            } />
          </Route>
          <Route path='login' element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
