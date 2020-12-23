import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { Poem as PoemInterface } from "../../../interfaces/poem";

const Poem = ({ poem }) => {
  return <div>{poem.content}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`${process.env.STRAPI_URL}/farsis`);

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
    `${process.env.STRAPI_URL}/farsis/${params.slug}`
  );

  return {
    props: {
      poem: res.data as PoemInterface,
    },
  };
};

export default Poem;
