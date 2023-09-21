import { gsap } from "gsap";

const animate = () => {
    const galleryWidth: number = document.getElementById("gallery")?.scrollWidth || 0;
    const galleryHeight: number = document.getElementById("gallery")?.clientHeight || 0;
    const screenWidth: number = window.innerWidth - 95 || 0;

    const galleryTrigger: ScrollTrigger.Vars = {
        // markers: true,
        trigger: "#gallery",
        start: `top ${galleryHeight + 100}`,
        end: `+=400`,
        scrub: 6,
        // pin: true,
        // toggleActions: "restart pause reverse pause",
    };

    gsap.to("#gallery", {
        x: -Math.ceil(galleryWidth - screenWidth),
        scrollTrigger: galleryTrigger,
    });
};

export default animate;
