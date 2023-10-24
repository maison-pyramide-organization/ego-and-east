import { useEffect } from "react";
import styles from "./styles.module.scss";
import slideshowImages from "../../data/slideshow";

const Hero = () => {
    let i = 0;
    const changeImage = () => {
        const time = 5000;
        const images = slideshowImages;
        const slide = document.querySelector("#slide-show img") as HTMLImageElement;
        slide.src = images[i];
        if (i < images.length - 1) i++;
        else i = 0;

        // setTimeout(changeImage, time);
    };

    useEffect(() => {
        changeImage();
    }, []);

    return (
        <div className={styles.hero}>
            <div id="slide-show" className={styles.slideshow}>
                <img src={slideshowImages[0]} className={styles.slide} alt="image" />
            </div>
            <h3 className={styles.info}>
                We connect top global luxury, beauty and fashion brands with the most compelling
                celebrities, actors, musicians, creatives and influencers in the Middle East – and
                beyond.
            </h3>
        </div>
    );
};
export default Hero;
