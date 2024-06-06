import styles from "./WalletsRight.module.scss";
import Wallet from "@/components/wallet/Wallet";
import AddButton from "@/components/UI/buttons/add/AddButton";

export default function WalletsRight() {
  return (
    <div className={styles.container}>
      <div className={styles.wallets}>
        <Wallet />
        <AddButton>Добавить кошелек</AddButton>
      </div>
    </div>
  );
}
