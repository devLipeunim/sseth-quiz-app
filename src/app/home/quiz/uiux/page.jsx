"use client";
import React, { useRef, useEffect, useState } from "react";
import quizData from "../../../../uiux";
import "../quiz.css";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";
import { runFireworks } from "../../../../lib/utils";
const Quiz = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    setUser(loggedInUser);
  }, []);


  const downloadResult = async () => {
    const scoreContainer = document.getElementById("scoreContainer");
    console.log("isDownload?");
    try {
      const canvas = await html2canvas(scoreContainer, { scale: 3 });
      const link = document.createElement("a");
      link.download = `${user}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating canvas:", error);
    }
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentSubmitQuestion, setCurrentSubmitQuestion] = useState(0);

  const [userAnswers, setUserAnswers] = useState(
    new Array(quizData.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleSubmitNext = () => {
    setCurrentSubmitQuestion(currentSubmitQuestion + 1);
  };
  const handleSubmitPrevious = () => {
    setCurrentSubmitQuestion(currentSubmitQuestion - 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to go back",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then(function (result) {
      if (result.value) {
        Swal.fire("Submitted!", "You have successfully submitted", "success");
        setShowResults(true);
        runFireworks();
      } else if (result.dismiss === "cancel") {
        Swal.fire("Cancelled!", "You can continue your work", "error");
      }
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Array(quizData.length).fill(null));
    setShowResults(false);
  };

  const renderOptions = () => {
    return quizData[currentQuestion].options.map((option, index) => (
      <li
        key={index}
        onClick={() => handleAnswer(option)}
        className={
          userAnswers[currentQuestion] === option ? "li-selected-question" : "li-hover"
        }
      >
        <span>{option}</span>
      </li>
    ));
  };

  const renderAnswer = () => {
    const currentOptions = quizData[currentSubmitQuestion].options;
    const correctAnswer = quizData[currentSubmitQuestion].correctAnswer;

    return currentOptions.map((option, index) => (
      <li
        key={index}
        className={
          option === correctAnswer
            ? "li-correct"
            : userAnswers[currentSubmitQuestion] === option
            ? "li-selected"
            : userAnswers[currentSubmitQuestion] === option &&
              option === correctAnswer
            ? "li-correct"
            : "li-hover"
        }
      >
        <span>{option}</span>
      </li>
    ));
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (userAnswers[i] === quizData[i].correctAnswer) {
        score++;
      }
    }
    return (score / quizData.length) * 100;
  };
  const userScore = calculateScore();

  const scrollDown = () => {
    window.scroll(0, 250);
  };

  if (showResults) {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Quiz Results</h1>
          <div class="score-container" id="scoreContainer">
            <div className="image"></div>
            <h2 className="appreciation">
              Thank you {user} <br />
              for participating in the 5 Weeks Summer Tech Bootcamp v1.0
            </h2>
            <span className="userScore">
              You have scored : {userScore.toFixed(2)}% in this Test
            </span>
            <button type="button" className="scroll" onClick={scrollDown}>
              See Answers
            </button>
          </div>
          <h3 className="submit-question">
            Question: {currentSubmitQuestion + 1}{" "}
            <span>/ {quizData.length}</span>
          </h3>
          <div className="quiz-container">
            <h3 className="question">
              {quizData[currentSubmitQuestion].question}
            </h3>

            {renderAnswer()}
            <div className="row">
              <button
                onClick={handleSubmitPrevious}
                disabled={currentSubmitQuestion === 0}
                className="btn"
              >
                Previous
              </button>
              <button
                onClick={handleSubmitNext}
                className="btn"
                disabled={currentSubmitQuestion === quizData.length - 1}
              >
                Next
              </button>
              <button onClick={downloadResult} className="btn downloadBtn">
                Download Result
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="section-container">
        <h2 className="subHeader">
          Question: {currentQuestion + 1} <span>/ {quizData.length}</span>
        </h2>
        <div className="quiz-container">
          <h3 className="question">{quizData[currentQuestion].question}</h3>

          {renderOptions()}

          <div className="row">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="btn"
              disabled={currentQuestion === quizData.length - 1}
            >
              Next
            </button>
            {currentQuestion === quizData.length - 1 && (
              <button onClick={handleSubmit} className="btn submit">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
