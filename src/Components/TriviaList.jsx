import { useState } from "react";
import { useEffect } from "react";
export const TriviaList = () => {
  const [questions, setQuestion] = useState([]);
  useEffect(() => {
    const results = [];
    async function getQuestions() {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const formatted = await response.json();
      for (const question of formatted.results) {
        results.push(question);
      }
      setQuestion([...results]);
    }
    getQuestions();
  }, []);
  return (
    <>
      <ul>
        {questions.map((question) => {
          return (
            <li key={question.question}>
              <ul>
                <h4>Question</h4>
                <p>{question.question}</p>
                <p>Answers:</p>
                <ul>
                  <p>Correct:</p>
                  <li>{question.correct_answer}</li>
                  <p>Other options:</p>
                  {question.incorrect_answers.map((a) => {
                    return <li key={crypto.randomUUID()}>{a}</li>;
                  })}
                </ul>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};
