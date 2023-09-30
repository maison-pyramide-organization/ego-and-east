import About from "../../components/About";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Music from "../../components/Music";
import Popup from "../../components/Popup";
import Services from "../../components/Services";
import styles from "./styles.module.scss";

const Home = () => {
    return (
        <>
            <div className={styles.page}>
                <Header />
                <Hero />
                <Services />
                <About />
                <Gallery />
                <Music />
            </div>
            <Footer />
            <Popup />
        </>
    );
};
export default Home;
