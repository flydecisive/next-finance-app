import styles from "./ConfirmButton.module.scss";

import React from "react";
import { BaseButtonProps } from "@/types/types";

interface ConfirmButtonProps extends BaseButtonProps {}

const ConfirmButton = ({ children, onClick }: ConfirmButtonProps) => {
  return (
    <div className={`button ${styles.button}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default ConfirmButton;
