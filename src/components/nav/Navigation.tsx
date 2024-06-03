"use client";
import { useRouter, usePathname } from "next/navigation";

import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      console.log(pathname);
    }
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link
            className={
              pathname === "/"
                ? `${styles.nav_link} ${styles["nav_link-active"]}`
                : styles.nav_link
            }
            href={"/"}
          >
            главная
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            className={
              pathname === "/expenses"
                ? `${styles.nav_link} ${styles["nav_link-active"]}`
                : styles.nav_link
            }
            href={"/expenses"}
          >
            расходы
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            className={
              pathname === "/wallets"
                ? `${styles.nav_link} ${styles["nav_link-active"]}`
                : styles.nav_link
            }
            href={"/wallets"}
          >
            кошельки
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            className={
              pathname === "/summary"
                ? `${styles.nav_link} ${styles["nav_link-active"]}`
                : styles.nav_link
            }
            href={"/summary"}
          >
            итоги
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            className={
              pathname === "/settings"
                ? `${styles.nav_link} ${styles["nav_link-active"]}`
                : styles.nav_link
            }
            href={"/settings"}
          >
            настройки
          </Link>
        </li>
      </ul>
    </nav>
  );
}
