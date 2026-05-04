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
    document.fonts.ready
      .then(() => {
        animation();
      })
      .catch((error) => {
        console.error("Error loading fonts:", error);
      });
  });

  /*
  useEffect(() => {
    let cancelled = false;
    // safe helper to wait for fonts or fallback after timeout
    const waitForFonts = async (timeout = 1200) => {
      // If Font Loading API available
      try {
        if (document?.fonts) {
          // prefer the ready Promise (widely supported)
          if (
            document.fonts.ready &&
            typeof document.fonts.ready.then === "function"
          ) {
            await Promise.race([
              document.fonts.ready as any,
              new Promise((res) => setTimeout(res, timeout)),
            ]);
            return;
          }

          // fallback to onloadingdone if ready isn't available
          if ("onloadingdone" in document.fonts) {
            await new Promise((resolve) => {
              const handler = () => {
                document.fonts.onloadingdone = null;
                resolve(undefined);
              };
              document.fonts.onloadingdone = handler;
              // safety timeout
              setTimeout(() => {
                document.fonts.onloadingdone = null;
                resolve(undefined);
              }, timeout);
            });
            return;
          }
        }
      } catch (err) {
        // ignore and fall through to timeout
      }

      // ultimate fallback: small delay so fonts may load
      await new Promise((res) => setTimeout(res, timeout));
    };

    (async () => {
      await waitForFonts(1200); // wait up to 1.2s for fonts, then proceed
      if (cancelled) return;
      try {
        animation();
      } catch (err) {
        // If animation throws, log it for Safari debugging
        // (avoid crashing the app)
        // eslint-disable-next-line no-console
        console.error("animation() failed:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);
  */

  return (
    <>
      <div id="p" className={s.p} style={{ opacity: 0 }}>
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
