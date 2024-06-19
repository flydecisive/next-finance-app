import styles from "./WalletsLeft.module.scss";
import Header from "@/components/header/Header";
import Wallet from "@/components/wallet/Wallet";

import { observer } from "mobx-react";
import walletsStore from "@/stores/wallets.store";

const WalletsLeft = observer(() => {
  const { state: wallets } = walletsStore;

  return (
    <div className={styles.wrapper}>
      <Header>Кошельки</Header>
      {wallets?.length === 0 && <p>У вас нет кошельков</p>}
      {wallets?.length > 0 && (
        <div className={styles.wallets}>
          {wallets.map((wallet, index: number) => {
            return (
              <Wallet
                name={wallet.name}
                balance={wallet.balance}
                id={wallet.id}
                color={wallet.color}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
});

export default WalletsLeft;
