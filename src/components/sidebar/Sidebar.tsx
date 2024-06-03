import styles from "./Sidebar.module.scss";

import Navigation from "../nav/Navigation";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Navigation />
    </aside>
  );
}
