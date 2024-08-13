import { ThemeProvider } from "styled-components";

import { darkNeon } from "shared/theme";
import useWebFont from "shared/hooks/useWebFont";
import AppRouter from "app/router";
import { AppProvider, AuthProvider } from "app/providers";

function App() {
  useWebFont();

  return (
    <ThemeProvider theme={darkNeon}>
      <AppProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
