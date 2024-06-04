import Image from "next/image";

import styles from "./SidebarUser.module.scss";

import AvatarIcon from "@/assets/images/avatar-default.svg";

export default function SidebarUser() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Image
          src={AvatarIcon}
          alt="avatar"
          className={styles.avatar_default}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>Maksim</p>
        <p className={styles.email}>fly@ya.ru</p>
      </div>
    </div>
  );
}
