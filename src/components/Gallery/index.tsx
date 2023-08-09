import { useEffect } from "react";
import images from "../../data/gallery";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as IgIcon } from "../../assets/Icons/instagram.svg";

const ig_url = "https://www.instagram.com/egoandeast/";

const animate = () => {
    const galleryWidth: number = document.getElementById("gallery")?.scrollWidth || 0;
    const galleryHeight: number = document.getElementById("gallery")?.clientHeight || 0;
    const screenWidth: number = window.innerWidth - 95 || 0;
    // const screenHeight: number = window.innerHeight || 0;
    // const start =  screenHeight -

    const galleryTrigger: ScrollTrigger.Vars = {
        markers: true,
        trigger: "#gallery",
        start: `top ${galleryHeight + 100}`,
        // start: `top 80%`,
        end: `+=400`,
        scrub: 6,
        // pin: true,
        // toggleActions: "restart pause reverse pause",
    };

    gsap.to("#gallery", {
        x: -Math.ceil(galleryWidth - screenWidth),
        // duration: 4,
        scrollTrigger: galleryTrigger,
    });
};

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
