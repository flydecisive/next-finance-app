"use client";

import React, { useRef, useState } from "react";
import styles from "./AddButton.module.scss";
import PlusIcon from "@/components/icons/plus/PlusIcon";

import { BaseButtonProps } from "@/types/types";

interface AddButtonProps extends BaseButtonProps {}

export default function AddButton({ children, onClick }: AddButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <input type="file" style={{ display: "none" }} ref={inputRef} />
      <div
        className={`button ${styles.button}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
      >
        <PlusIcon isHover={isHover} />
        <p
          className={
            isHover ? `${styles.text} ${styles.text_hovering}` : styles.text
          }
        >
          {children}
        </p>
      </div>
    </>
  );
}
