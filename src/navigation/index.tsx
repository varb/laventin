import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import HomeScreen from 'modules/HomeScreen';
import ShareTrackScreen from 'modules/ShareTrackScreen';
import LoginScreen from 'modules/LoginScreen';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path='t'>
            <Route index element={<Navigate replace to='/' />} />
            <Route path=':id' element={<ShareTrackScreen />} />
          </Route>
          <Route path='login' element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
