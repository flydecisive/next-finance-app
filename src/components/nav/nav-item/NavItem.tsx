import styles from "./NavItem.module.scss";

import React from "react";
import Link from "next/link";

interface NavItemProps {
  isActive: boolean;
  children: React.ReactNode;
  href: string;
}

export default function NavItem({ isActive, href, children }: NavItemProps) {
  return (
    <li className={styles.nav_item}>
      <Link
        className={
          isActive ? `${styles.link} ${styles.link_active}` : styles.link
        }
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
