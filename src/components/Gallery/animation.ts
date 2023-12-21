import { gsap } from "gsap";

const animate = () => {
    const galleryContainerWidth: number =
        document.getElementById("gallery-container")?.clientWidth || 0;
    const galleryWidth: number = document.getElementById("gallery")?.scrollWidth || 0;
    if (galleryContainerWidth >= galleryWidth) return;
    const galleryHeight: number = document.getElementById("gallery")?.clientHeight || 0;
    const screenWidth: number = window.innerWidth - 95 || 0;
    const screenHeight: number = window.innerHeight;
    const dist = -Math.abs(Math.ceil(galleryWidth - screenWidth));

    const galleryTrigger: ScrollTrigger.Vars = {
        // markers: true,
        trigger: "#gallery",
        start: `top ${screenHeight - (galleryHeight + 40)}`,
        end: `top end`,
        scrub: 4,
        // pin: true,
        // toggleActions: "restart pause reverse pause",
    };

    gsap.to("#gallery", {
        x: dist,
        scrollTrigger: galleryTrigger,
    });
};

export default animate;
