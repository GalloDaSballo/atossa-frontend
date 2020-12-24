import Link from "next/link";
import { useContext } from "react";
import styles from "../styles/Hero.module.scss";
import { LanguageContext } from "./context/LanguageContext";
import Navigation from "./partials/Navigation";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundHeader}>
        <picture>
          <source srcSet="/header@3x.jpg" media="(min-width: 1200px)" />
          <source srcSet="/header@2x.jpg" media="(min-width: 820px)" />
          <source srcSet="/header.jpg" media="(min-width: 10px)" />
          <img src="/header.jpg" />
        </picture>
        <Link href={language == "it" ? "/it/donate" : "/far/donate"}>
          <a className={styles.donateBtn}>Donate</a>
        </Link>
      </div>
      <Navigation />
    </div>
  );
};

export default Hero;
