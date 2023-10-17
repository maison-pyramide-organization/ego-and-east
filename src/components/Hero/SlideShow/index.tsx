import styles from "./styles.module.scss";
import slideshowImages from "../../../data/slideshow";

const SlideShow = () => {
    let i = 0;
    const changeImage = () => {
        const time = 5000;
        const images = slideshowImages;
        const slide = document.querySelector("#slide img") as HTMLImageElement;
        slide.src = images[i];
        if (i < images.length - 1) i++;
        else i = 0;

        setTimeout(changeImage, time);
    };
    window.onload = changeImage;

    return (
        <div className={styles.slideshow}>
            <div id="slide" className={styles.slide}>
                <img src={slideshowImages[1]} className={styles.slide} alt="image" />
            </div>
        </div>
    );
};

export default SlideShow;
