"use client";

import styles from "./AddWallet.module.scss";
import ModalLayout from "../layout";
import BaseInput from "@/components/UI/inputs/base-input/BaseInput";
import ColorSelect from "@/components/color-select/ColorSelect";
import ConfirmButton from "@/components/UI/buttons/confirm/ConfirmButton";
import CancelButton from "@/components/UI/buttons/cancel/CancelButton";

import { createPortal } from "react-dom";
import { useState } from "react";
import { observer } from "mobx-react";
import walletsStore from "@/stores/wallets.store";

interface AddWalletModalProps {
  isShow: boolean;
  title: string;
  toggleModalShow: () => void;
}

const AddWalletModal = observer(
  ({ isShow, title, toggleModalShow }: AddWalletModalProps) => {
    const [formData, setFormData] = useState({
      name: "Наличные",
      balance: 0,
      color: "#7297c4",
    });

    const handleCancelButton = () => {
      toggleModalShow();
      setFormData({
        name: "Наличные",
        balance: 0,
        color: "#7297c4",
      });
    };

    const handleConfirmButton = () => {
      walletsStore.addWallet({ ...formData, id: walletsStore.state[0].id + 1 });
      toggleModalShow();
    };

    if (!isShow) {
      return null;
    }

    return createPortal(
      <ModalLayout isModalOpen={isShow} title={title}>
        <form className={styles.form}>
          <BaseInput
            label={"Название"}
            value={formData.name}
            onInput={(value: string) => {
              setFormData({ ...formData, name: value });
            }}
          />
          <div className={styles.wrapper}>
            <BaseInput
              type={"number"}
              label={"Баланс"}
              value={formData.balance}
              onInput={(value: string) => {
                setFormData({ ...formData, balance: Number(value) });
              }}
            />
            <ColorSelect
              setColor={(color: string) => {
                setFormData({ ...formData, color });
              }}
            />
          </div>
          <div className={styles.buttons}>
            <ConfirmButton onClick={handleConfirmButton}>
              Сохранить
            </ConfirmButton>
            <CancelButton onClick={handleCancelButton}>Отменить</CancelButton>
          </div>
        </form>
      </ModalLayout>,
      document.body,
    );
  },
);

export default AddWalletModal;
