import s from "./_s.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Test() {
  useGSAP(() => {

    const box_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#s",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: "#w",
      },
    });

    box_tl.to("#box", { scale: 0.4, ease: "none", duration: 2 });

    box_tl.from(
      "#text p",
      {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.out",
        duration: 1,
      },
      ">",
    );
  });

  return (
    <>
      <section id="s" className={s.s}>
        <div id="w" className={s.w}>
          <div id="box" className={s.box}></div>
          <div id="text" className={s.text}>
            <p>
              Co-founders Reem and Natalya Kanj have propelled Ego & East into
              one of the most prominent
            </p>
            <p>
              The Lebanese sisters and business partners have crafted an
              innovative approach to talent management.
            </p>
          </div>
        </div>
      </section>
      {/* <section id="out" className={s.out} /> */}
    </>
  );
}
