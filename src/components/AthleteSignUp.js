import { reduce } from "lodash";
import { useEffect, useState } from "react";
import { API_QUESTIONS_URL, API_SAVE_USER_URL } from "../constants/endpoints";
import { PAGES } from "../constants/pages";
import { AccountSignUp } from "./AccountSignUp";
import { NavigationButtons } from "./NavigationButtons";
import { Question } from "./Question";

export function AthleteSignUp({ props }) {
  const { setCurrentPage } = props;

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userData, setUserData] = useState({});
  const [userAccountData, setUserAccountData] = useState({});
  const [userAccountCompleted, setUserAccountCompleted] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(API_QUESTIONS_URL);
      const data = await res.json();

      const questions = data["questions"];
      setQuestions(questions);
      setUserData(reduce(questions, (pv, cv) => ({ ...pv, [cv.id]: "" }), {}));
    }

    fetchQuestions();
  }, []);

  async function submitAthleteData() {
    const athleteData = { ...userAccountData, userData };

    const body = JSON.stringify(athleteData);
    const res = await fetch(API_SAVE_USER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const data = await res.json();
    console.log(data);

    setCurrentPage(PAGES.ATHLETE_DASHBOARD);
  }

  if (userAccountCompleted) {
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
            setUserAccountCompleted,
          }}
        />
      </>
    );
  }

  return (
    <AccountSignUp
      props={{ setUserAccountData, setUserAccountCompleted, setCurrentPage }}
    />
  );
}
