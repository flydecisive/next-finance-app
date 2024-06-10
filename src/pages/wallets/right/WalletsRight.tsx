import styles from "./WalletsRight.module.scss";
import AddButton from "@/components/UI/buttons/add/AddButton";

export default function WalletsRight() {
  return (
    <div className={styles.container}>
      <AddButton>Добавить кошелек</AddButton>
    </div>
  );
}
