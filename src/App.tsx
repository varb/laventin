import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
// import ScrollToTop from 'components/ScrollToTop';
import HomeScreen from 'modules/HomeScreen';
import ShareTrackScreen from 'modules/ShareTrackScreen';
import Layout from 'components/Layout';
import useWebFont from 'hooks/useWebFont';

function App() {
  useWebFont();

  return (
    <ThemeProvider theme={theme.darkNeon}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path='t'>
              <Route index element={<Navigate replace to='/' />} />
              <Route path=":id" element={<ShareTrackScreen />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
