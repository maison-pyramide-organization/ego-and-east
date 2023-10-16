import styles from "./styles.module.scss";
import image from "../../assets/e&e-slideshow.gif";
import { ReactComponent as MpCompanyLogo } from "../../assets/MP Company logo.svg";
const Hero = () => {
    return (
        <main className={styles.hero}>
            <div className={styles.heroWraper}>
                <div className={styles.imageContainer}>
                    <img src={image} className={styles.image} alt="EGO & EAST" />
                </div>
                {/* <h1 className={styles.title}>Zeyne x YUNG & Miu Miu</h1> */}
            </div>
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
