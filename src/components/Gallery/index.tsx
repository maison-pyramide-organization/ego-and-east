import { useEffect } from "react";
import images from "../../data/gallery";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ig_url = "https://www.instagram.com/egoandeast/";

const animate = () => {
    const galleryWidth: number = document.getElementById("gallery")?.scrollWidth || 0;
    const galleryHeight: number = document.getElementById("gallery")?.clientHeight || 0;
    const screenWidth: number = window.innerWidth - 95 || 0;

    const scrollTrigger: ScrollTrigger.Vars = {
        // markers: true,
        trigger: "#gallery",
        start: "top 30%",
        end: `+=400`,
        scrub: 4,
        pin: true,

        // toggleActions: "restart pause reverse pause",
    };

    gsap.to("#gallery", {
        x: -Math.ceil(galleryWidth - screenWidth),
        // duration: 4,
        scrollTrigger,
    });
};

const Gallery = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animate();
    }, []);

    return (
        <>
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
                            {/* <img src={image.image} alt="ego and easet" /> */}
                        </div>
                    ))}

                    {/* <div className={styles.gallerySpace} /> */}
                </div>
            </div>
            <a href={ig_url} target="_default" className={styles.igLink}>
                <span className={styles.igUserName}>@egoandeast</span>
                <button type="button" className={styles.followBtn}>
                    follow us
                </button>
            </a>
        </>
    );
};
export default Gallery;
