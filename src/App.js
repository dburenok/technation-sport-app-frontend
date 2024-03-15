import { useState } from "react";
import logo from "./logo.png";
import "./App.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: { ffPrimary: { main: "#56CCF2", contrastText: "#000" } },
  typography: { fontFamily: `"Outfit", sans-serif` },
});

const PAGES = {
  Home: "Home",
  SignUp: "SignUp",
  Login: "Login",
};

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.Home);
  console.log(currentPage);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <Typography variant="h2" sx={{ margin: 0 }}>
              <b>FitFeed</b>
            </Typography>
            <img width={150} src={logo} alt="logo" />
          </div>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            textAlign={"left"}
            gutterBottom
          >
            Your personal, AI-generated meal plan.
          </Typography>
          <Typography variant="h5">
            Tailor-made to suit your training plan and the food you already have
            in your fridge.
          </Typography>
          <Button
            onClick={() => setCurrentPage(PAGES.SignUp)}
            variant="contained"
            color="ffPrimary"
            sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => setCurrentPage(PAGES.Login)}
            variant="contained"
            color="ffPrimary"
            sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
          >
            Login
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
