"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    setUser(loggedInUser);
  }, []);
  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem(user);
    Swal.fire({
      title: "Success!",
      text: "Logged out successful.",
      icon: "success",
      confirmButtonText: "Thanks",
    });
    router.push("/");

  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        SSETH
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <h3 style={{textAlign: "center"}}>Hi {user}</h3>
        <button className={styles.logout} onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
