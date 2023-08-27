// "use client"
// import React, { useState } from "react";
// import quizData from "../../../data";
// import "./quiz.css"

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
//   const [showResults, setShowResults] = useState(false);

//   const handleNext = () => {
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentQuestion(currentQuestion - 1);
//   };

//   const handleAnswer = (selectedOption) => {
//     const updatedAnswers = [...userAnswers];
//     updatedAnswers[currentQuestion] = selectedOption;
//     setUserAnswers(updatedAnswers);
//   };

//   const handleSubmit = () => {
//     setShowResults(true);
//   };

//   const resetQuiz = () => {
//     setCurrentQuestion(0);
//     setUserAnswers(new Array(quizData.length).fill(null));
//     setShowResults(false);
//   };

//   const renderOptions = () => {
//     return quizData[currentQuestion].options.map((option, index) => (
//       <button
//         key={index}
//         onClick={() => handleAnswer(option)}
//         className={userAnswers[currentQuestion] === option ? "selected" : ""}
//       >
//         {option}
//       </button>
//     ));
//   };

//   const calculateScore = () =>{
//     let score =0
//     for (let i=0; i<quizData.length; i++){
//       if (userAnswers[i] ===quizData[i].correctAnswer){
//         score++
//       }
//     }
//     return (score / quizData.length)*100
//   }

//   if (showResults) {
//     const userScore = calculateScore()
//     return (
//       <div>
//         <h2>Quiz Results</h2>
//         {quizData.map((question, index) => (
//           <div key={index}>
//             <p>{question.question}</p>
//             <p>Correct Answer: {question.correctAnswer}</p>
//             <p>Your Answer: {userAnswers[index]}</p>
//           </div>
//         ))}
//         <h3>Your Score: {userScore.toFixed(2)}%</h3>
//         <button onClick={resetQuiz}>Restart Quiz</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2>Question {currentQuestion + 1}</h2>
//       <p>{quizData[currentQuestion].question}</p>
//       <div className="options">{renderOptions()}</div>
//       <button onClick={handlePrevious} disabled={currentQuestion === 0}>
//         Previous
//       </button>
//       <button onClick={handleNext} disabled={currentQuestion === quizData.length - 1}>
//         Next
//       </button>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Quiz;
