import s from "./_s.module.scss";
import { ReactComponent as LogoI } from "@a/b-logo.svg";
import mpcoLogo from "@a/Images/mpco-logo-white.png";

export default function Footer() {
  return (
    <footer className={s.f}>
      <div className={s.f_t}>
        <div className={s.f_info}>
          <h4>FOR MORE INFORMATION</h4>
          <a href="mailto:karenwazen@egoandeast.co" target="_blank">
            CONTACT US
          </a>
        </div>
        <p>
          This document and the information in it are provided in confidence,
          for the sole purpose of the recipient, and may not be disclosed to any
          third party or used for any other purpose without the express written
          permission of Reem or Natalya Kanj.
        </p>
      </div>
      <div className={s.f_cr}>
        <p>©2026 ALL RIGHTS RESERVED</p>
      </div>

      <div className={s.f_b}>
        <div className={s.f_lo}>
          <LogoI />
        </div>
        <div className={s.r}>
          <div className={s.f_so}>
            <a target="_blank" href="https://www.instagram.com/egoandeast">
              INSTAGRAM
            </a>
            <span>/</span>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/ego-east/"
            >
              LINKEDIN
            </a>
          </div>

          <img src={mpcoLogo} alt="Maison Pyramide Company Logo" />
        </div>
      </div>
    </footer>
  );
}
