import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export function NavigationButtons({ props }) {
  const { questionIndex, setQuestionIndex, maxIndex, setUserAccountCompleted, submitData } = props;

  return (
    <Box sx={{ mt: "15px" }}>
      <Button
        onClick={() => (questionIndex + 1 === maxIndex ? submitData() : setQuestionIndex((i) => i + 1))}
        variant="contained"
        color="fitFeedBlue"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Next
      </Button>
      <Button
        onClick={() => (questionIndex === 0 ? setUserAccountCompleted(false) : setQuestionIndex((i) => i - 1))}
        variant="contained"
        color="fitFeedBlue"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Back
      </Button>
    </Box>
  );
}
