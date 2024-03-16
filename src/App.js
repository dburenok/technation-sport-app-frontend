import { useState } from "react";
import { AthleteDashboard } from "./components/AthleteDashboard";
import { LandingPage } from "./components/LandingPage";
import { Logo } from "./components/Logo";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignUp } from "./components/SignUp";
import { PAGES } from "./constants/pages";

const theme = createTheme({
  palette: {
    mode: "dark",
    ffPrimary: { main: "#56CCF2", contrastText: "#000" },
  },
  typography: { fontFamily: `"Outfit", sans-serif` },
});

function renderPage(page, props) {
  if (page === PAGES.HOME) {
    return <LandingPage props={props} />;
  }

  if (page === PAGES.SIGNUP) {
    return <SignUp props={props} />;
  }

  if (page === PAGES.ATHLETE_DASHBOARD) {
    return <AthleteDashboard />;
  }

  return `TODO: Implement ${page} page`;
}

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Logo />
        {renderPage(currentPage, {
          currentPage,
          setCurrentPage,
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
