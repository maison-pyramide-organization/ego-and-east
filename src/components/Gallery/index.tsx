import { useEffect } from "react";
import images from "../../data/gallery";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as IgIcon } from "../../assets/Icons/instagram.svg";
import animate from "./animation";

const ig_url = "https://www.instagram.com/egoandeast/";

const Gallery = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animate();
    }, []);

    return (
        <section className="section">
            <div className={styles.galleryContainer}>
                <div id="gallery" className={styles.gallery}>
                    <div className={styles.gallerySpace} />

                    {/* IMAGES  */}
                    {images.map((image) => (
                        <div
                            className={styles.imageWraper}
                            key={image.id}
                            style={{ backgroundImage: `url(${image.image})` }}
                        >
                            <IgIcon className={styles.igIcon} />
                        </div>
                    ))}
                </div>
            </div>
            <a href={ig_url} target="_default" className={styles.igLink}>
                <span className={styles.igUserName}>@egoandeast</span>
                <button type="button" className={styles.followBtn}>
                    follow us
                </button>
            </a>
        </section>
    );
};
export default Gallery;
