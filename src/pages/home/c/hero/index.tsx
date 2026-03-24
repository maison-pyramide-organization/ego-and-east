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
        end: "bottom bottom",
        scrub: 1,
        pin: "#hero",
      },
    });

    tl.to("#vid", { scale: 0.4, ease: "none", duration: 2 });
    tl.from("#hero p", {
      opacity: 0,
      ease: "power3.inOut",
      duration: 0.5,
    });
    tl.from("#hero h1", {
      opacity: 0,
      ease: "power3.inOut",
      duration: 0.5,
    },'<');
  });
  return (
    <>
      <section id="he-s" className={s.s}>
        <div className={s.x}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="hero" className={s.hero}>
          <figure id="vid">
            <video src="/vids/ego-demo.mp4" autoPlay playsInline loop muted />
          </figure>
          <p>
            Co-founders Reem and Natalya Kanj have propelled Ego & East into one
            of the most prominent
          </p>
          <p>
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
