import axios from "axios";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/context/LanguageContext";
import Hero from "../../components/Hero";
import Poems from "../../components/Poems";

const Home = ({ poems }) => {
  const { setCurrentLanguage } = useContext(LanguageContext);

  useEffect(() => setCurrentLanguage("far"), []);
  return (
    <div>
      <Head>
        <title>Poesie di Atossa - Italiano</title>
      </Head>
      <Hero />
      <h1 className="title">Latest Updates</h1>
      <Poems poems={poems} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/italians`);

  return {
    props: {
      poems: res.data,
    },
  };
};

export default Home;
