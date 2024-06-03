import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

import styles from "./layout.module.scss";

export default function PageLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
