"use client";

import Image from "next/image";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Hero from "../../images/creativity-animate.svg";

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.heroTitle}>
        🥇<span className={styles.title}>Unlocking knowledge at the speed of thought.</span> 
        </h1>
        <Button url="./home/rules" text="Get Started"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
