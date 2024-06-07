"use client";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.scss";
import Link from "next/link";
import NavItem from "./nav-item/NavItem";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <NavItem isActive={pathname === "/"} href="/">
          главная
        </NavItem>
        <NavItem isActive={pathname === "/expenses"} href="/expenses">
          расходы
        </NavItem>
        <NavItem isActive={pathname === "/wallets"} href="/wallets">
          кошельки
        </NavItem>
        <NavItem isActive={pathname === "/summary"} href="/summary">
          итоги
        </NavItem>
        <NavItem isActive={pathname === "/settings"} href="/settings">
          настройки
        </NavItem>
      </ul>
    </nav>
  );
}
