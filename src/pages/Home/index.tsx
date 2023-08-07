import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Music from "../../components/Music";
import Services from "../../components/Services";
import styles from "./styles.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Hero />
            <Services/>
            <About />
            <Gallery/>
            <Music />
        </div>
    );
};
export default Home;
