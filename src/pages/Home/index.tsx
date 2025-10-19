import s from "./_s.module.scss";
import { ReactComponent as LogoI } from "@a/logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { animation } from "./_animation";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    document.fonts.onloadingdone = () => {
      animation();
    };
  });

  return (
    <>
      {/* <LoaderComponent isLoading={isLoading} /> */}
      <div className={s.p}>
        <a href="https://www.instagram.com/egoandeast" className={`${s.ig} y_`}>
          <div className="y" text-animation="ig">
            INSTAGRAM
          </div>
        </a>

        <div className={s.ab_}>
          <div a-id="ab" className={s.ab}>
            We connect top luxury, beauty, fashion and lifestyle brands with the
            most compelling talent in the Middle East. We specialize in talent
            management, celebrity bookings, brand strategy and influencer
            marketing.
          </div>
          <a href="mailto:hello@egoandeast.co" className={`${s.cta} y_`}>
            <div className="y">
              LET'S TALK
              <span className={`${s.u} u`}></span>
            </div>
          </a>
        </div>

        <div className={`${s.f} y_`}>
          <div a-id="f-lo">
            <LogoI />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
