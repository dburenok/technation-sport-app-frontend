import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PAGES } from "../constants/pages";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SportsIcon from "@mui/icons-material/Sports";

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
      <Typography variant="h5" gutterBottom sx={{ mb: "25px" }}>
        Tailor-made to suit your training plan and the food you already have in
        your fridge.
      </Typography>
      <Button
        startIcon={<SportsHandballIcon />}
        onClick={() => {
          setCurrentPage(PAGES.ATHLETE_SIGNUP);
        }}
        variant="contained"
        color="fitFeedGreen"
        sx={{ width: "250px", m: "5px", borderRadius: "15px" }}
      >
        Athlete Sign Up
      </Button>
      <Button
        startIcon={<SportsIcon />}
        onClick={() => {
          setCurrentPage(PAGES.COACH_SIGNUP);
        }}
        variant="contained"
        color="fitFeedBlue"
        sx={{ width: "250px", m: "5px", borderRadius: "15px" }}
      >
        Coach Sign Up
      </Button>
      <Button
        onClick={() => {
          setCurrentPage(PAGES.LOGIN);
        }}
        variant="contained"
        color="fitFeedBlue"
        sx={{ width: "250px", m: "5px", borderRadius: "15px" }}
      >
        Login
      </Button>
    </header>
  );
}
