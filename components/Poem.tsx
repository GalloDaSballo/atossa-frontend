import Link from "next/link";
import React, { useContext } from "react";
import { formatDate } from "../utils/formatDate";
import { LanguageContext } from "./partials/context/LanguageContext";

import styles from "../styles/Poems.module.scss";
import { formatText } from "../utils/formatText";

const Poem = ({ poem }) => {
  const { language } = useContext(LanguageContext);
  const url =
    language == "far" ? `/far/poem/${poem.slug}` : `/it/poem/${poem.slug}`;

  return (
    <article className={styles.poemCard}>
      <Link href={url}>
        <a>
          <img src="/placeholder_image.jpg" alt={poem.title} />
        </a>
      </Link>
      <span>{formatDate(poem.created_at)}</span>
      <Link href={url}>
        <a>
          <h3>{formatText(poem.title, 50)}</h3>
        </a>
      </Link>
      <p>{formatText(poem.content, 100)}</p>
    </article>
  );
};

export default Poem;
