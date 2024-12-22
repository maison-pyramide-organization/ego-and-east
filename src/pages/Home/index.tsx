import s from "./styles.module.scss";
import { useEffect, useState } from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Music from "../../components/Music";
import Services from "../../components/Services";
import LoaderComponent from "../Loader";
import Gallery from "../../components/Gallery";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <LoaderComponent isLoading={isLoading} />
      <Header />
      <main className={s.p}>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Music />
      </main>
      <Footer />
    </>
  );
};
export default Home;
