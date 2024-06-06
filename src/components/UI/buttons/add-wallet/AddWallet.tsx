"use client";

import { useRef, useState } from "react";
import styles from "./AddWallet.module.scss";
import PlusIcon from "@/components/icons/plus/PlusIcon";

export default function AddWalletButton() {
  const [isHover, setIsHover] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input type="file" style={{ display: "none" }} ref={inputRef} />
      <div
        className={styles.button}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleButtonClick}
      >
        <PlusIcon isHover={isHover} />
        <p
          className={
            isHover ? `${styles.text} ${styles.text_hovering}` : styles.text
          }
        >
          Добавить кошелек
        </p>
      </div>
    </>
  );
}
