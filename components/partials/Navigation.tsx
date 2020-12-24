import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import styles from "../../styles/Navigation.module.scss";
import NavigationLinks from "../NavigationLinks";

const Navigation = () => {
  const { language } = useContext(LanguageContext);

  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <a>
          <img src="/atossa-logo.png" alt="Atossa" />
        </a>
      </Link>
      <div>
        <NavigationLinks />
        <Link href={language == "far" ? `/far/donate` : `/it/donate`}>
          <a className={styles.donateBtn}>Donate</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
