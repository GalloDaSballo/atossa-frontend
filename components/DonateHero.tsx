import styles from "../styles/DonateHero.module.scss";
import BackBtn from "./BackBtn";
import NavigationLinks from "./NavigationLinks";

const Hero = () => {
  return (
    <div className={styles.donateHero}>
      <div className={styles.backgroundHeader}>
        <picture>
          <source srcSet="/donate-header@3x.jpg" media="(min-width: 1200px)" />
          <source srcSet="/donate-header@2x.jpg" media="(min-width: 820px)" />
          <source srcSet="/donate-header.jpg" media="(min-width: 10px)" />
          <img src="/donate-header.jpg" />
        </picture>
      </div>
      <BackBtn className={styles.backBtn} />
      <div className={styles.navLinks}>
        <NavigationLinks />
      </div>
      <img src="/atossa-logo.png" alt="atossa" className={styles.logo} />
      {/* <Navigation /> */}
    </div>
  );
};

export default Hero;
