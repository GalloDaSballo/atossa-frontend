import Link from "next/link";
import { useContext } from "react";
import styles from "../styles/NavigationLinks.module.scss";
import { LanguageContext } from "./partials/context/LanguageContext";

const NavigationLinks = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Link href="/it">
        <a
          className={`${styles.navItem} ${
            language == "it" ? styles.active : ""
          }`}
        >
          Italian
        </a>
      </Link>
      <Link href="/far">
        <a
          className={`${styles.navItem} ${
            language == "far" ? styles.active : ""
          }`}
        >
          Farsi
        </a>
      </Link>
    </>
  );
};

export default NavigationLinks;
