"use client";

import styles from "./Wallet.module.scss";
import WalletIcon from "../icons/wallet/WalletIcon";

// import WalletIcon from "@/assets/images/wallet.svg";

// import Image from "next/image";
import { useRouter } from "next/navigation";

interface WalletProps {
  name: string;
  balance: number;
  id: number;
}

const path = "/wallet/";

export default function Wallet({ name, balance, id }: WalletProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path + id);
  };

  return (
    <div className={styles.wallet} onClick={handleClick}>
      {/* <Image src={WalletIcon} alt="wallet" width={30} height={30} /> */}
      <WalletIcon />
      <div className={styles.info}>
        <p className={styles.type}>{name}</p>
        <p className={styles.balance}>{balance} р.</p>
      </div>
    </div>
  );
}
