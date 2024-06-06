import styles from "./AddButton.module.scss";
import React from "react";

interface AddButtonProps {
  children: Readonly<React.ReactNode>;
}

export default function AddButton({ children }: AddButtonProps) {
  return <div className={styles.button}>{children}</div>;
}
