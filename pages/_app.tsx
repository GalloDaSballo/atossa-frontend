import LanguageProvider from "../components/context/LanguageContext";
import Layout from "../components/partials/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
