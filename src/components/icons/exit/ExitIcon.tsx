import styles from "./ExitIcon.module.scss";
import { IconProps } from "@/types/types";

export default function ExitIcon({ isHover }: IconProps) {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={
        isHover ? `${styles.icon} ${styles.icon_hovered}` : styles.icon
      }
    >
      <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z" />
      <path d="m11 16 5-4-5-4v3.001H3v2h8z" />
    </svg>
  );
}
