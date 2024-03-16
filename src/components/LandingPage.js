import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PAGES } from "../constants/pages";

export function LandingPage({ props }) {
  const { setCurrentPage } = props;

  return (
    <header className="App-header">
      <div className="logo">
        <Typography variant="h2" sx={{ margin: 0 }} fontWeight={"bold"}>
          FitFeed
        </Typography>
      </div>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        textAlign={"left"}
        gutterBottom
      >
        Your personal, AI-generated meal plan.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Tailor-made to suit your training plan and the food you already have in
        your fridge.
      </Typography>
      <Button
        onClick={() => {
          setCurrentPage(PAGES.SIGNUP);
        }}
        variant="contained"
        color="ffPrimary"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          setCurrentPage(PAGES.LOGIN);
        }}
        variant="contained"
        color="ffPrimary"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Login
      </Button>
    </header>
  );
}
