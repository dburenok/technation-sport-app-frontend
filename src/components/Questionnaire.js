import { reduce } from "lodash";
import { useEffect, useState } from "react";
import { COACH_QUESTIONS_URL, ATHLETE_QUESTIONS_URL, SAVE_USER_URL } from "../constants/endpoints";
import { PAGES } from "../constants/pages";
import { AccountSignUp } from "./AccountSignUp";
import { NavigationButtons } from "./NavigationButtons";
import { Question } from "./Question";

export function Questionnaire({ props }) {
  const { setCurrentPage, type, setLoggedInUserId } = props;

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userData, setUserData] = useState({});
  const [userAccountData, setUserAccountData] = useState({});
  const [userAccountCompleted, setUserAccountCompleted] = useState(false);

  useEffect(() => {
    async function fetchTypeQuestions() {
      const url = type === "athlete" ? ATHLETE_QUESTIONS_URL : COACH_QUESTIONS_URL;
      const res = await fetch(url);
      const data = await res.json();

      const questions = data["questions"];
      setQuestions(questions);
      setUserData(reduce(questions, (pv, cv) => ({ ...pv, [cv.questionName]: "" }), {}));
    }

    fetchTypeQuestions();
  }, [type]);

  async function submitData() {
    const completedData = { ...userAccountData, userData };

    const body = JSON.stringify(completedData);
    const res = await fetch(SAVE_USER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    const data = await res.json();
    const userId = `${data.data.user.id}`;
    setLoggedInUserId(userId);

    const nextPage = type === "athlete" ? PAGES.ATHLETE_DASHBOARD : PAGES.COACH_DASHBOARD;
    setCurrentPage(nextPage);
  }

  if (userAccountCompleted) {
    return (
      <>
        <Question props={{ questions, questionIndex, userData, setUserData }} />
        <NavigationButtons
          props={{
            questionIndex,
            setQuestionIndex,
            maxIndex: questions.length,
            setUserAccountCompleted,
            submitData,
          }}
        />
      </>
    );
  }

  return <AccountSignUp props={{ setUserAccountData, setUserAccountCompleted, setCurrentPage, type }} />;
}
