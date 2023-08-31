"use client";

import Image from "next/image";
import React from "react";
import "./categories.css";
import Link from "next/link";
import frontEnd from "../../../images/12832384_5088206.jpg";
import backEnd from "../../../images/7401752_3657969.svg";
import graphics from "../../../images/31283901_7814561.jpg";
import uiux from "../../../images/31283899_7814553.jpg";
import desktop from "../../../images/view-3d-personal-computer-with-workstation.jpg";
import software from "../../../images/6802364_26958.jpg";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const goFrontEnd = () => {
    Swal.fire({
      title: "😎",
      text: "Are you ready?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, I'm",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then(function (result) {
      if (result.value) {
        Swal.fire(
          "Happy Hacking!",
          "Unlocking knowledge at the speed of thought",
          "success"
        );
        router.push("./quiz/frontEnd");
      } else if (result.dismiss === "cancel") {
        Swal.fire("Cancelled!", "You can come back when ready!", "error");
      }
    });
  };
  const goBackEnd = () => {
    router.push("/showErrorQuiz");

    // Swal.fire({
    //   title: "Are you readddy?",
    //   text: "😎",
    //   icon: "info",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes, I'm in",
    //   cancelButtonText: "No",
    //   reverseButtons: true,
    // }).then(function (result) {
    //   if (result.value) {
    //     Swal.fire(
    //       "Happy Hacking!",
    //       "Unlocking knowledge at the speed of thought",
    //       "success"
    //     );
    //     router.push("./quiz/backEnd");
    //   } else if (result.dismiss === "cancel") {
    //     Swal.fire("Cancelled!", "You can come back when ready!", "error");
    //   }
    // });
  };
  const goFullStack = () => {
    router.push("/showErrorQuiz");
    // Swal.fire({
    //   title: "Are you readddy?",
    //   text: "😎",
    //   icon: "info",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes, I'm in",
    //   cancelButtonText: "No",
    //   reverseButtons: true,
    // }).then(function (result) {
    //   if (result.value) {
    //     Swal.fire(
    //       "Happy Hacking!",
    //       "Unlocking knowledge at the speed of thought",
    //       "success"
    //     );
    //     router.push("./quiz/fullStack");
    //   } else if (result.dismiss === "cancel") {
    //     Swal.fire("Cancelled!", "You can come back when ready!", "error");
    //   }
    // });
  };
  const goGraphicsDesign = () => {
    router.push("/showErrorQuiz");
    // Swal.fire({
    //   title: "Are you readddy?",
    //   text: "😎",
    //   icon: "info",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes, I'm in",
    //   cancelButtonText: "No",
    //   reverseButtons: true,
    // }).then(function (result) {
    //   if (result.value) {
    //     Swal.fire(
    //       "Happy Hacking!",
    //       "Unlocking knowledge at the speed of thought",
    //       "success"
    //     );
    //     router.push("./quiz/graphics");
    //   } else if (result.dismiss === "cancel") {
    //     Swal.fire("Cancelled!", "You can come back when ready!", "error");
    //   }
    // });
  };
  const goUiUX = () => {
    Swal.fire({
      title: "Are you ready?",
      text: "😎",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, I'm in",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then(function (result) {
      if (result.value) {
        Swal.fire(
          "Happy Hacking!",
          "Unlocking knowledge at the speed of thought",
          "success"
        );
        router.push("./quiz/uiux");
      } else if (result.dismiss === "cancel") {
        Swal.fire("Cancelled!", "You can come back when ready!", "error");
      }
    });
  };
  const goDeskTop = () => {
    Swal.fire({
      title: "Are you ready?",
      text: "😎",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, I'm in",
      cancelButtonText: "No",
      reverseButtons: true,
    }).then(function (result) {
      if (result.value) {
        Swal.fire(
          "Happy Hacking!",
          "Unlocking knowledge at the speed of thought",
          "success"
        );
        router.push("./quiz/desktop");
      } else if (result.dismiss === "cancel") {
        Swal.fire("Cancelled!", "You can come back when ready!", "error");
      }
    });
  };
  const goSoftware = () => {
    router.push("/showErrorQuiz");
    // Swal.fire({
    //   title: "Are you readddy?",
    //   text: "😎",
    //   icon: "info",
    //   showCancelButton: true,
    //   confirmButtonText: "Yes, I'm in",
    //   cancelButtonText: "No",
    //   reverseButtons: true,
    // }).then(function (result) {
    //   if (result.value) {
    //     Swal.fire(
    //       "Happy Hacking!",
    //       "Unlocking knowledge at the speed of thought",
    //       "success"
    //     );
    //     router.push("./quiz/fullStack");
    //   } else if (result.dismiss === "cancel") {
    //     Swal.fire("Cancelled!", "You can come back when ready!", "error");
    //   }
    // });
  };

  return (
    <div className="category-wrapper">
      <h3 className="mg-t-1">Categories</h3>
      <div className="category-wrapper-second category-container">
        <div className="txt-md"  onClick={goFrontEnd}>
          <div className="category-card mg-1">
            <Image className="category-img" src={frontEnd} alt="Front-End" />
            <span className="package">Front-End</span>
          </div>
        </div>
        <div className="txt-md" onClick={goBackEnd}>
          <div className=" category-card mg-1">
            <Image className="category-img" src={backEnd} alt="Back-End" />
            <span className="package">Back-End</span>
          </div>
        </div>
        <div className="txt-md" onClick={goFullStack}>
          <div className="category-card mg-1">
            <Image className="category-img" src={software} alt="Full-stack" />
            <span className="package">Full-stack</span>
          </div>
        </div>

        <div className="txt-md" onClick={goUiUX}>
          <div className="category-card mg-1">
            <Image className="category-img" src={uiux} alt="UI/UX Design" />
            <span className="package">UI/UX Design</span>
          </div>
        </div>
        <div className="txt-md"  onClick={goDeskTop}>
          <div className="category-card mg-1">
            <Image
              className="category-img"
              src={desktop}
              alt="Desktop Publishing"
            />
            <span className="package">Desktop Publishing</span>
          </div>
        </div>
        <div className="txt-md"  onClick={goGraphicsDesign}>
          <div className="category-card mg-1">
            <Image
              className="category-img"
              src={graphics}
              alt="Graphics Design"
            />
            <span className="package">Graphics Design</span>
          </div>
        </div>
        <div className="txt-md"  onClick={goSoftware}>
          <div className="category-card mg-1">
            <Image className="category-img" src={software} alt="Software Dev" />
            <span className="package">Software Dev</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
