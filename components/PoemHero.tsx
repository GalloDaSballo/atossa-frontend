import Navigation from "./partials/Navigation";

import styles from "../styles/PoemHero.module.scss";
import BackBtn from "./BackBtn";
import { formatDate } from "../utils/formatDate";
import { formatImageUrl } from "../utils/formatImageUrl";

const Hero = ({ title, date, image }) => {
  return (
    <div className={styles.poemHero}>
      <div className={styles.backgroundHeader}>
        <img src={formatImageUrl(image.url)} alt={title} />
        <div className={styles.backdrop}></div>
        <BackBtn className={styles.backBtn} />
        <div className={styles.info}>
          <span>{formatDate(date)}</span>
          <h1>{title}</h1>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Hero;
