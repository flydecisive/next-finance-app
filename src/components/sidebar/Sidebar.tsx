import styles from "./Sidebar.module.scss";

import Navigation from "../nav/Navigation";
import SidebarUser from "./user/SidebarUser";
import AuthButton from "../UI/buttons/auth/AuthButton";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SidebarUser />
      <Navigation />
      <AuthButton />
    </aside>
  );
}
