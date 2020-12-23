import React from "react";
import { Poem as PoemInterface } from "../interfaces/poem";
import styles from "../styles/Poems.module.scss";
import Poem from "./Poem";

const Poems = ({ poems }) => {
  return (
    <div className={styles.poemsContainer}>
      {poems.map((poem: PoemInterface) => (
        <Poem poem={poem} key={poem.slug} />
      ))}
    </div>
  );
};

export default Poems;
