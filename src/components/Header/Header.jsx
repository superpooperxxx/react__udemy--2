import Logo from "../../assets/investment-calculator-logo.png";

import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles["header"]}>
    <img src={Logo} alt="logo" />
    <h1>Investment Calculator</h1>
  </header>
);
