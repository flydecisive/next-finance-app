import styles from "./Wallet.module.scss";
import WalletIcon from "@/assets/images/wallet.svg";

import Image from "next/image";

export default function Wallet() {
  return (
    <div className={styles.wallet}>
      <Image src={WalletIcon} alt="wallet" width={30} height={30} />
      <div className={styles.info}>
        <p className={styles.type}>Наличные</p>
        <p className={styles.balance}>100 р.</p>
      </div>
    </div>
  );
}
