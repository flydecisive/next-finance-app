import styles from "./layout.module.scss";
import React from "react";

interface PageLayoutProps {
  left: React.ReactNode;
  right?: React.ReactNode;
}

export default function PageLayout({ left, right }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right && right}</div>
    </div>
  );
}
