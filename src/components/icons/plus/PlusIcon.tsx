import styles from "./PlusIcon.module.scss";
import { IconProps } from "@/types/types";

export default function PlusIcon({ isHover }: IconProps) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        isHover ? `${styles.icon} ${styles.icon_hovering}` : styles.icon
      }
    >
      <path
        d="M4 12H20M12 4V20"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
