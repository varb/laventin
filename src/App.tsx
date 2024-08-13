import { ThemeProvider } from "styled-components";

import { darkNeon } from "shared/theme";
import useWebFont from "shared/hooks/useWebFont";
import AppRouter from "navigation";
import { AppProvider } from "app/providers/AppProvider";
import AuthProvider from "app/providers/AuthProvider";

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
