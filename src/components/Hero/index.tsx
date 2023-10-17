import styles from "./styles.module.scss";
import { ReactComponent as MpCompanyLogo } from "../../assets/MP Company logo.svg";
import SlideShow from "./SlideShow";
const Hero = () => {
    return (
        <main className={styles.hero}>
            <SlideShow />
            <MpCompanyLogo className={styles.companyLogo} />
            <h3 className={styles.info}>
                We connect top global luxury, beauty and fashion brands with the most compelling{" "}
                <br /> celebrities, actors, musicians, creatives and influencers in the Middle East
                – and beyond.
            </h3>
        </main>
    );
};
export default Hero;
