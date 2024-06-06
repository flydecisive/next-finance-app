import styles from "./WalletsRight.module.scss";
import Wallet from "@/components/wallet/Wallet";
import AddWalletButton from "@/components/UI/buttons/add-wallet/AddWallet";

export default function WalletsRight() {
  return (
    <div className={styles.container}>
      <div className={styles.wallets}>
        <Wallet />
        <AddWalletButton />
      </div>
    </div>
  );
}
