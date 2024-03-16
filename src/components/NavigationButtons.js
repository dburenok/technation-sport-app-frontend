import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { PAGES } from "../constants/pages";

export function NavigationButtons({ props }) {
  const {
    questionIndex,
    maxIndex,
    setQuestionIndex,
    setCurrentPage,
    submitAthleteData,
  } = props;

  return (
    <Box sx={{ mt: "15px" }}>
      <Button
        onClick={() =>
          questionIndex === 0
            ? setCurrentPage(PAGES.HOME)
            : setQuestionIndex((i) => i - 1)
        }
        variant="contained"
        color="ffPrimary"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Back
      </Button>
      <Button
        onClick={() =>
          questionIndex + 1 === maxIndex
            ? submitAthleteData()
            : setQuestionIndex((i) => i + 1)
        }
        variant="contained"
        color="ffPrimary"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Next
      </Button>
    </Box>
  );
}
