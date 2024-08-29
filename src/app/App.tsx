import { ThemeProvider } from "styled-components";

import AppRouter from "app/routes";
import { darkNeon } from "shared/theme";
import { AuthProvider } from "shared/providers";
import { HeaderProvider } from "shared/providers/HeaderProvider";

function App() {
  return (
    <ThemeProvider theme={darkNeon}>
      <AuthProvider>
        <HeaderProvider>
          <AppRouter />
        </HeaderProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
