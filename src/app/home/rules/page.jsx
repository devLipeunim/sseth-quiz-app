"use client";
import React from "react";
import "./rules.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const goQuiz = ()=>{
    router.push("./categories")
  }
  const goHome = ()=>{
    router.push("./");
  }
  return (
    <div className="rules-container">
      <div className="rules-wrapper">
        <h3 className="title">Rules</h3>
        <div className="rules">
          <span>
            👉 Each question is of multiple-choice format, with only one right
            answer per question.
          </span>
          <span>
            👉 Read the question carefully, and click on the option to select it
            as the answer for the question.
          </span>
          <span>
            👉 After responding to the last question, click on &#34;Submit&#34;
            to end the quiz and view the results.
          </span>
          <span>
            👉 For every correct answer you get +1 points and no negative points
            for wrong answers.
          </span>
          <span>👉 Un-answered questions do not lead to point deduction.</span>
        </div>
        <div className="two-buttons">
        <button className="button" onClick={goHome}>Go back !</button>
   
        <button className="button" onClick={goQuiz}>Start Quiz !</button>
        
        </div>

      </div>
    </div>
  );
};

export default Page;
