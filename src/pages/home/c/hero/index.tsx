import { useGSAP } from "@gsap/react";
import s from "./_s.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#he-s",
        start: "top top",
        // end: "bottom bottom",
        end: "bottom bottom",
        scrub: true,
        pin: "#hero",
        pinSpacing: false,
      },
    });
    // tl.to("#vid", { scale: 0.5, ease: "none", duration: 2 });
    // tl.to("#vid", { scale: 0.6, ease: "none", duration: 2 });
    tl.to("#vid", {
      y: "-40rem",
      width: "800rem",
      height: "450rem",
      ease: "none",
      duration: 2,
    });

    tl.from("#hero p", {
      opacity: 0,
      ease: "power3.inOut",
      duration: 0.5,
    });

    tl.from(
      "#hero h1",
      {
        opacity: 0,
        ease: "power3.inOut",
        duration: 0.5,
      },
      // "<",
    );

    gsap.from("#h", {
      autoAlpha: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#he-s",
        start: "center center",
        // markers: true,
        toggleActions: "play none play reverse",
      },
    });
  });

  const isPortrait =
    typeof window !== "undefined"
      ? window.innerHeight > window.innerWidth
      : false;

  return (
    <>
      <section id="he-s" className={s.s}>
        {/* <div className={s.x}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        <div id="hero" className={s.hero}>
          <figure id="vid">
            {/* <video src="/vids/he-d.mp4" autoPlay playsInline loop muted /> */}
            <video
              preload="true"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              src={isPortrait ? "/vids/he-m.mp4" : "/vids/he-d.mp4"}
            ></video>
          </figure>
          <p className="d-o">
            Co-founders Reem and Natalya Kanj have propelled Ego & East into one
            of the most prominent
          </p>
          <p className="d-o">
            The Lebanese sisters and business partners have crafted an
            innovative approach to talent management,
          </p>
          <h1>
            We connect top global luxury, beauty and fashion brands with the
            most compelling celebrities, actors, musicians, creatives and
            influencers in the Middle East – and beyond.
          </h1>
        </div>
      </section>
    </>
  );
}
