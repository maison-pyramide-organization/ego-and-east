import styles from "./styles.module.scss";
import Slider from "./slider";
import { useEffect, useState } from "react";
import getSliderImages from "../../services/api/getSliderImages";

const Hero = () => {
    const [slides, setSlides] = useState(null);

    useEffect(() => {
        getSliderImages().then((images) => {
            setSlides(images);
        });
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.slider_container}>
                <Slider slides={slides} />
            </div>
            <h1 className={styles.info}>
                We connect top global luxury, beauty and fashion brands with the most compelling
                celebrities, actors, musicians, creatives and influencers in the Middle East – and
                beyond.
            </h1>
        </div>
    );
};
export default Hero;
