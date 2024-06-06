import styles from "./Header.module.scss";
import React from "react";

interface HeaderProps {
  children: Readonly<React.ReactNode>;
}

export default function Header({ children }: HeaderProps) {
  return <h2 className={styles.header}>{children}</h2>;
}
