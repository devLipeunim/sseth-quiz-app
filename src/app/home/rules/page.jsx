import React from "react";

import Link from "next/link";
import "./rules.css";

const page = () => {
  return (
    <div className="container">
      <div className="wrapper">
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
            👉 For every correct answer you get +5 points and no negative points
            for wrong answers.
          </span>
          <span>👉 Un-answered questions do not lead to point deduction.</span>
        </div>
        <div className="two-buttons">
        <Link className="button" href="./categories">
          Go back !
        </Link>
        <Link className="button" href="./rules">
          Start Quiz !
        </Link>
        </div>

      </div>
    </div>
    // <div className="flex-column flex-center">
    //   <div className="flex-space-btwn flex-center rules-container">
    //     <h3>Rules</h3>
    //     <div className="rules flex-col-space-btwn">
    //       <span>
    //         👉 Each question is of multiple-choice format, with only one right
    //         answer per question.
    //       </span>
    //       <span>
    //         👉 Read the question carefully, and click on the option to select it
    //         as the answer for the question.
    //       </span>
    //       <span>
    //         👉 After responding to the last question, click on "Submit" to end
    //         the quiz and view the results.
    //       </span>
    //       <span>
    //         👉 For every correct answer you get +5 points and no negative points
    //         for wrong answers.
    //       </span>
    //       <span>👉 Un-answered questions do not lead to point deduction.</span>
    //     </div>
    //     <a className="link-btn txt-center mg-1" href="questions.html">
    //       Start Quiz !
    //     </a>
    //   </div>
    // </div>
  );
};

export default page;
