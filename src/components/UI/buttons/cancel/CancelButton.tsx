import styles from "./CancelButton.module.scss";

import { BaseButtonProps } from "@/types/types";

interface CancelButtonProps extends BaseButtonProps {}

const CancelButton = ({ children, onClick }: CancelButtonProps) => {
  return (
    <div className={`button ${styles.button}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default CancelButton;
