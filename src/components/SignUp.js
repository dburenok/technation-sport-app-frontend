import { reduce } from "lodash";
import { useEffect, useState } from "react";
import { API_QUESTIONS_URL } from "../constants/endpoints";
import { PAGES } from "../constants/pages";
import { NavigationButtons } from "./NavigationButtons";
import { Question } from "./Question";

export function SignUp({ props }) {
  const { setCurrentPage } = props;

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(API_QUESTIONS_URL);
      const data = await response.json();

      const questions = data["questions"];
      setQuestions(questions);
      setUserData(reduce(questions, (pv, cv) => ({ ...pv, [cv.id]: "" }), {}));
    }

    fetchQuestions();
  }, []);

  function submitAthleteData() {
    console.log("Sending athlete data:", userData);
    setCurrentPage(PAGES.ATHLETE_DASHBOARD);
  }

  return (
    <>
      <Question props={{ questions, questionIndex, userData, setUserData }} />
      <NavigationButtons
        props={{
          questionIndex,
          maxIndex: questions.length,
          setQuestionIndex,
          setCurrentPage,
          submitAthleteData,
        }}
      />
    </>
  );
}
