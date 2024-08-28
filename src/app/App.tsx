import { ThemeProvider } from "styled-components";

import { darkNeon } from "shared/theme";
import useWebFont from "shared/hooks/useWebFont";
import AppRouter from "app/routes";
import { AppProvider, AuthProvider } from "shared/providers";
import { HeaderProvider } from "shared/providers/HeaderProvider";

function App() {
  useWebFont();

  return (
    <ThemeProvider theme={darkNeon}>
      <AppProvider>
        <AuthProvider>
          <HeaderProvider>
            <AppRouter />
          </HeaderProvider>
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
