"use client";

import styles from "./Wallet.module.scss";
import WalletIcon from "../icons/wallet/WalletIcon";

import { useRouter } from "next/navigation";

interface WalletProps {
  name: string;
  balance: number;
  id: number;
  color: string;
}

const path = "/wallet/";

export default function Wallet({ name, balance, id, color }: WalletProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path + id);
  };

  return (
    <div className={styles.wallet} onClick={handleClick}>
      <WalletIcon color={color !== "" ? color : ""} />
      <div className={styles.info}>
        <p className={styles.type}>{name}</p>
        <p className={styles.balance}>{balance} р.</p>
      </div>
    </div>
  );
}
