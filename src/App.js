import { useState } from "react";
import { AthleteDashboard } from "./components/AthleteDashboard";
import { LandingPage } from "./components/LandingPage";
import { Logo } from "./components/Logo";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Questionnaire } from "./components/Questionnaire";
import { PAGES } from "./constants/pages";

const theme = createTheme({
  palette: {
    mode: "dark",
    fitFeedBlue: { main: "#56CCF2", contrastText: "#000" },
    fitFeedGreen: { main: "#56f29f", contrastText: "#000" },
  },
  typography: { fontFamily: `"Outfit", sans-serif` },
});

function renderPage(page, props) {
  if (page === PAGES.HOME) {
    return <LandingPage props={props} />;
  }

  if (page === PAGES.ATHLETE_SIGNUP) {
    return <Questionnaire props={{ ...props, type: "athlete" }} />;
  }

  if (page === PAGES.COACH_SIGNUP) {
    return <Questionnaire props={{ ...props, type: "coach" }} />;
  }

  if (page === PAGES.ATHLETE_DASHBOARD) {
    return <AthleteDashboard props={props} />;
  }

  return `TODO: Implement ${page} page`;
}

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [loggedInUserId, setLoggedInUserId] = useState("70"); // set manually for demo
  console.log({ loggedInUserId });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Logo />
        {renderPage(currentPage, {
          currentPage,
          setCurrentPage,
          loggedInUserId,
          setLoggedInUserId,
        })}
      </div>
    </ThemeProvider>
  );
}

export default App;
