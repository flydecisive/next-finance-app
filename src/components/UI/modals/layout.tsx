"use client";

import React, { useEffect, useRef } from "react";
import styles from "./layout.module.scss";

interface ModalLayoutProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  title: string;
}

const ModalLayout = ({ children, isModalOpen, title }: ModalLayoutProps) => {
  const modal = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isModalOpen && modal) {
      modal?.current?.showModal();
    }

    if (!isModalOpen && modal) {
      modal?.current?.close();
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modal} className={styles.modal}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </dialog>
  );
};

export default ModalLayout;
