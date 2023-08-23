"use client";
import React, { useState } from "react";
import { quiz } from "../../data";

const Page = () => {
  const { questions } = quiz;
  // Add an array to store selected answer indices for each question
  const [selectedAnswerIndices, setSelectedAnswerIndices] = useState(
    new Array(questions.length).fill(null)
  );
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { question, answers, correctAnswer } = questions[activeQuestion];




  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    // Update the selected answer index for the current question
    const updatedSelectedAnswerIndices = [...selectedAnswerIndices];
    updatedSelectedAnswerIndices[activeQuestion] = idx;
    setSelectedAnswerIndices(updatedSelectedAnswerIndices);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  // Function to go to the previous question
  const prevQuestion = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
    setChecked(false);
  };

  return (
    <div className="wrapper">
          <div className="container">
      <h1>Web Dev. (Front-End)</h1>
      <div>
        <h2 className="questionTitle">
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndices[activeQuestion] === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <div className="row">
                <button onClick={prevQuestion} className="btn">
                  Prev
                </button>
                <button onClick={nextQuestion} className="btn">
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {" "}
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default Page;
