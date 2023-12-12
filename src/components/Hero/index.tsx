import styles from "./styles.module.scss";
import Slider from "./slider";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Slider />
            <h3 className={styles.info}>
                We connect top global luxury, beauty and fashion brands with the most compelling
                celebrities, actors, musicians, creatives and influencers in the Middle East – and
                beyond.
            </h3>
        </div>
    );
};
export default Hero;
