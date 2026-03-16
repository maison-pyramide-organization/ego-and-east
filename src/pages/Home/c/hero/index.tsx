import s from "./_s.module.scss";
import v from "@a/videos/ego-demo.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#hero",
    //     start: "top top",
    //     end: "bottom top",
    //     // end: "+=300vh",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });
    // tl.fromTo("#vid", { scale: 1 }, { scale: 0.5, ease: "none" });
    // tl.to("#vid", { scale: 0.5, ease: "none" });
    // tl.to("#vid", { scale: 0.5 });
    // gsap.fromTo(
    //   "#vid",
    //   {
    //     scale: 1,
    //   },
    //   {
    //     scela: 0.5,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: "#hero",
    //       start: "top top",
    //       end: "+=300vh",
    //       scrub: 1,
    //       pin: '#vid',
    //       markers: true,
    //     },
    //   },
    // );
  });

  return (
    <section id="he-s" className={s.s}>
      <div id="hero" className={s.hero}>
        <figure id="vid">
          {/* <video src={v} playsInline loop muted /> */}
          <video src="/vids/ego-demo.mp4" autoPlay playsInline loop muted />
        </figure>
      </div>
    </section>
  );
}
