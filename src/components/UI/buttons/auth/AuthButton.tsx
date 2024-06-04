"use client";
import { useState } from "react";
import styles from "./AuthButton.module.scss";

import ExitIcon from "@/components/icons/exit/ExitIcon";

export default function AuthButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={styles.button}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ExitIcon isHover={isHover} />
      <p className={styles.text}>Выйти</p>
    </div>
  );
}
