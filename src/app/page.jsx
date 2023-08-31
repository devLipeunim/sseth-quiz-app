"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/Logo.jpg";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "./onBoard.css";

const Onboard = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedInUser =
      typeof window !== "undefined"
        ? localStorage.getItem("loggedInUser")
        : null;
    if (loggedInUser) {
      router.push("./home");
    }
  }, []);

  const inputField = [useRef(), useRef(), useRef(), useRef()];
  const toggleBtn = [useRef(), useRef()];
  const maiN = useRef();
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    const inputs = inputField.map((ref) => ref.current);
    const toggle_btn = toggleBtn.map((ref) => ref.current);
    const main = maiN.current;
    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });

    toggle_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
      });
    });
  }, []);

  // this is the normal signUp Function. Uncomment this after the bootcamp
  // const signUp = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("userName", signUpName);
  //   localStorage.setItem("userEmail", signUpEmail);
  //   localStorage.setItem("userPassword", signUpPassword);
  //   Swal.fire({
  //     title: "Success!",
  //     text: "Sign up Successful!",
  //     icon: "success",
  //     confirmButtonText: "Thanks",
  //   });
  //   setSignUpEmail("")
  //   setSignUpName("")
  //   setSignUpPassword("")
  // };

  // this is the normal login Function. Uncomment this after the bootcamp
  // const login = (e) => {
  //   e.preventDefault();
  //   const storedUserName = localStorage.getItem("userName");
  //   const storedUserPassword = localStorage.getItem("userPassword");
  //   if (loginName === storedUserName && loginPassword === storedUserPassword) {
  //     Swal.fire({
  //       title: "Success!",
  //       text: `Welcome ${loginName}`,
  //       icon: "success",
  //       confirmButtonText: "Thanks",
  //     });
  //     localStorage.setItem("loggedInUser", loginName);
  //     router.push("./home");
  //     setLoginName("")
  //     setLoginPassword("")
  //   } else {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "Login failed. Please check your credentials.",
  //       icon: "error",
  //       confirmButtonText: "Thanks",
  //     });
  //   }
  // };

  // this is only for the bootcamp. comment this after the bootcamp
  //
  if (typeof window !== "undefined") {
    localStorage.setItem("userName1", "Weagle Ghandhi");
    localStorage.setItem("userName2", "Favour Elijah");
    localStorage.setItem("userName3", "Blessing Michael");

    localStorage.setItem("userName4", "Israel Odutola");
    localStorage.setItem("userName5", "David Aiyede");
    localStorage.setItem("userName6", "Gold Ogunseitan");

    localStorage.setItem("userName7", "Nosakhare Omoruyi");
    localStorage.setItem("userName8", "Afeez Awolumate");
    localStorage.setItem("userName9", "Tobiloba Afuwape");

    localStorage.setItem("admin", "SSETH");
    localStorage.setItem("password", "2023");
  }

  const login = (e) => {
    e.preventDefault();
    const storedUserName1 = localStorage.getItem("userName1");
    const storedUserName2 = localStorage.getItem("userName2");
    const storedUserName3 = localStorage.getItem("userName3");
    const storedUserName4 = localStorage.getItem("userName4");
    const storedUserName5 = localStorage.getItem("userName5");
    const storedUserName6 = localStorage.getItem("userName6");
    const storedUserName7 = localStorage.getItem("userName7");
    const storedUserName8 = localStorage.getItem("userName8");
    const storedUserName9 = localStorage.getItem("userName9");
    const storedAdmin = localStorage.getItem("admin");

    const storedUserPassword = localStorage.getItem("password");
    if (
      (loginName === storedUserName1 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName2 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName3 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName4 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName5 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName6 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName7 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName8 && loginPassword === storedUserPassword) ||
      (loginName === storedUserName9 && loginPassword === storedUserPassword) ||
      (loginName === storedAdmin && loginPassword === storedUserPassword)
    ) {
      Swal.fire({
        title: "Success!",
        text: `Welcome ${loginName}`,
        icon: "success",
        confirmButtonText: "Thanks",
      });
      localStorage.setItem("loggedInUser", loginName);
      router.push("./home");
      setLoginName("");
      setLoginPassword("");
    } else {
      // Swal.fire({
      //   title: "Error!",
      //   text: "Login failed. Please check your credentials.",
      //   icon: "error",
      //   confirmButtonText: "Thanks",
      // });

      router.push("./showError");
    }
  };

  const getHelp = () => {
    Swal.fire({
      title: "Info!",
      text:
        "Inspect the webpage and check the application tab (under Local Storage).",
      icon: "info",
      confirmButtonText: "Thanks",
    });
  };

  return (
    <main ref={maiN}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <Image
                  src={logo}
                  className="logoImage"
                  style={{
                    width: "60px",
                    marginRight: "0.3rem",
                    height: "auto",
                  }}
                  alt="logo"
                />
                <h4>Standard Success Edu-Tech Hub</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet? </h6>
                <Link href="#" className="toggle" ref={toggleBtn[0]}>
                  Sign up
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    ref={inputField[0]}
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    ref={inputField[1]}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input
                  type="submit"
                  value="Sign In"
                  className="sign-btn"
                  onClick={login}
                />

                <p className="text">
                  Forgotten your password or your login datails?
                  <Link href="#" onClick={getHelp}>
                    Get help
                  </Link>{" "}
                  signing in
                </p>
                <br />
                <p className="text">
                  &copy;{new Date().getFullYear()} SSETH. All Rights Reserved
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autoComplete="off"
              className="sign-up-form"
            >
              <div className="logo">
                <Image
                  src={logo}
                  className="logoImage"
                  style={{
                    width: "60px",
                    marginRight: "0.3rem",
                    height: "auto",
                  }}
                  alt="logo"
                />
                <h4>Standard Success Edu-Tech Hub</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? </h6>
                <Link href="#" className="toggle" ref={toggleBtn[1]}>
                  Sign in
                </Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    ref={inputField[2]}
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    value={signUpEmail}
                    ref={inputField[3]}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    ref={inputField[4]}
                    placeholder="Password"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    autoComplete="off"
                    required
                  />
                  {/* <label>Password</label> */}
                </div>

                <input
                  type="submit"
                  value="Sign Up"
                  className="sign-btn"
                  // onClick={signUp}
                />

                <p className="text">
                  By signing up, I agree to the
                  <Link href="#"> Terms of Services</Link> and
                  <Link href="#"> Privacy Policy</Link>
                </p>
                <br />
                <p className="text">
                  &copy;{new Date().getFullYear()} SSETH. All Rights Reserved
                </p>
              </div>
            </form>
          </div>

          <div className="carousel"></div>
        </div>
      </div>
    </main>
  );
};

export default Onboard;
