import AppRouter from "./AppRouter";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./lib/theme";
import { GlobalStyle } from "./Global.styled";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
