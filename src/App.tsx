import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import useWebFont from 'hooks/useWebFont';
import AppRouter from 'navigation';

function App() {
  useWebFont();

  return (
    <ThemeProvider theme={theme.darkNeon}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
