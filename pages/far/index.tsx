import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Poems from "../../components/Poems";

const Home = ({ poems }) => {
  useEffect(() => {
    localStorage.setItem("language", "far");
  }, []);

  return (
    <>
      <h1>italian version</h1>
      <Poems poems={poems} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${process.env.STRAPI_URL}/farsis`);

  return {
    props: {
      poems: res.data,
    },
  };
};

export default Home;
