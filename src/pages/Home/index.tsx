import { useEffect, useState } from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Music from "../../components/Music";
import Popup from "../../components/Popup";
import Services from "../../components/Services";
import styles from "./styles.module.scss";
import LoaderComponent from "../Loader";

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
            <main className={styles.page}>
                <Hero />
                <Services />
                <About />
                <Gallery />
                <Music />
            </main>
            <Footer />
            <Popup />
        </>
    );
};
export default Home;
