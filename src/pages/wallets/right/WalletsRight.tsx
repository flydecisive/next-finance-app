"use client";

import styles from "./WalletsRight.module.scss";
import AddButton from "@/components/UI/buttons/add/AddButton";
import AddWalletModal from "@/components/UI/modals/add-wallet/AddWallet";

import { observer } from "mobx-react";
import { useState } from "react";

const WalletsRight = observer(() => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  const handleAddButton = () => {
    setIsModalShow(true);
  };

  return (
    <div className={styles.container}>
      <AddButton onClick={handleAddButton}>Добавить кошелек</AddButton>
      <AddWalletModal
        isShow={isModalShow}
        title={"Создать кошелек"}
        toggleModalShow={() => {
          setIsModalShow(false);
        }}
      />
    </div>
  );
});

export default WalletsRight;
