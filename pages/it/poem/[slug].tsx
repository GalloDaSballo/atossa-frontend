import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { Poem as PoemInterface } from "../../../interfaces/poem";
import styles from "../../../styles/PoemPage.module.scss";
import PoemHero from "../../../components/PoemHero";
import Poems from "../../../components/Poems";
import Link from "next/link";

const Poem = ({ poem, poems }) => {
  return (
    <div className={styles.poem}>
      <PoemHero date={poem.created_at} image={poem.image} title={poem.title} />
      <div className={styles.content}>{poem.content}</div>
      <Link href="/it/donate">
        <a className={styles.donateBtn}>Donate</a>
      </Link>
      {poems.length > 0 && (
        <>
          <h2 className={styles.title}>More Poems</h2>
          <Poems poems={[poem, poem]} />
        </>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`${process.env.STRAPI_URL}/italians`);

  const paths = res.data.map((poem: PoemInterface) => ({
    params: { slug: poem.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.STRAPI_URL}/italians/${params.slug}`
  );

  return {
    props: {
      poem: res.data as PoemInterface,
      poems: [],
    },
  };
};

export default Poem;
