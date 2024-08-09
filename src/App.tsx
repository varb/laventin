import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import useWebFont from 'hooks/useWebFont';
import AppRouter from 'navigation';
import { AppProvider } from 'providers/AppProvider';
import AuthProvider from 'providers/AuthProvider';

function App() {
  useWebFont();

  return (
    <ThemeProvider theme={theme.darkNeon}>
      <AppProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
