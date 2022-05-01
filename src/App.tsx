import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import useWebFont from 'hooks/useWebFont';
import AppRouter from 'navigation';
import AuthProvider from 'providers/AuthProvider';

function App() {
  useWebFont();

  return (
    <ThemeProvider theme={theme.darkNeon}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
