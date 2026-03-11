import s from "./_s.module.scss";
import { ReactComponent as LogoI } from "@a/logo.svg";
import mpcoLogo from "@a/Images/mp-co-logo.png";

export default function Footer() {
  return (
    <footer id="f" className={s.f}>
      <div className={s.f_t}>
        <ul>
          <li>
            <h4>DUBAI</h4>
            <a href="mailto:DUBAI@MAISONPYRAMIDE.COM">
              DUBAI@MAISONPYRAMIDE.COM
            </a>
          </li>
          <li>
            <h4>RIYADH</h4>
            <a href="mailto:RIYADH@MAISONPYRAMIDE.COM">
              RIYADH@MAISONPYRAMIDE.COM
            </a>
          </li>
          <li>
            <h4>CAIRO</h4>
            <a href="mailto:CAIRO@MAISONPYRAMIDE.COM">
              CAIRO@MAISONPYRAMIDE.COM
            </a>
          </li>
        </ul>
        <div>
          <div className={s.f_cta}>
            <h4>WANT TO CHAT ABOUT TALENTS, EVENTS, ACTIVATIONS?</h4>
            <button>
              <a href="mailto:hello@egoandeast.co" target="_blank">
                GET IN TOUCH
              </a>
            </button>
          </div>
          {/* <div className={s.f_cta}>
            <h4>WANT TO GET SCOUTED?</h4>
            <button>BECOME A TALENT</button>
          </div>
          <div className={s.f_cta}>
            <h4>LOOKING FOR POWERFUL NEW TALENT?</h4>
            <button>BOOK A TALENT</button>
          </div> */}
        </div>
      </div>
      <div className={s.f_so}>
        <a target="_blank" href="https://www.instagram.com/egoandeast">
          INSTAGRAM
        </a>
        <span>/</span>
        <a target="_blank" href="https://www.linkedin.com/company/ego-east/">
          LINKEDIN
        </a>
      </div>
      <div className={s.f_lo}>
        <LogoI />
      </div>
      <div className={s.f_b}>
        <p>©2026 ALL RIGHTS RESERVED</p>
        <img src={mpcoLogo} alt="Maison Pyramide Company Logo" />
      </div>
    </footer>
  );
}
