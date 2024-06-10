import styles from "./WalletsLeft.module.scss";
import Header from "@/components/header/Header";
import Wallet from "@/components/wallet/Wallet";

export default function WalletsLeft() {
  return (
    <div className={styles.wrapper}>
      <Header>Кошельки</Header>
      <div className={styles.wallets}>
        <Wallet name="Наличные" balance={1000} id={1} />
        <Wallet name="Карта" balance={9999} id={2} />
      </div>
    </div>
  );
}
