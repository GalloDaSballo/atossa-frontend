import Router from "next/dist/next-server/server/router";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface LanguageContext {
  language: string;
  setCurrentLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContext>({
  language: "",
  setCurrentLanguage: (language: string) => {},
});

const LanguageProvider = ({ children }) => {
  // defaulting to italian
  const [language, setLanguage] = useState("it");
  const router = useRouter();

  const setCurrentLanguage = (language: string) => {
    setLanguage(language);
    localStorage.setItem("language", language);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (!savedLanguage) {
      localStorage.setItem("language", "it");
      setLanguage("it");
    }

    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const isItalian = router.pathname.match(/(\/it(\/|$))/);

    if (isItalian && localStorage.getItem("language") !== "it") {
      localStorage.setItem("language", "it");
      setLanguage("it");
      return;
    }

    const isFarsi = router.pathname.match(/(\/far(\/|$))/);

    if (isFarsi && localStorage.getItem("language") !== "far") {
      localStorage.setItem("language", "far");
      setLanguage("far");
    }
  }, [router.pathname]);

  return (
    <LanguageContext.Provider value={{ setCurrentLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
