import axios from "axios";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Poems from "../../components/Poems";
const Home = ({ poems }) => {
  useEffect(() => {
    localStorage.setItem("language", "it");
  }, []);

  return (
    <div>
      <Hero />
      <h1 className="title">Latest Updates</h1>
      <Poems poems={poems} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${process.env.STRAPI_URL}/italians`);

  return {
    props: {
      poems: res.data,
    },
  };
};

export default Home;
