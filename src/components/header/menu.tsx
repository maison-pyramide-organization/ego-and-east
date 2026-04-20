import s from "./_s.module.scss";
import { ReactComponent as LogoI } from "@a/b-logo.svg";
import mpcoLogo from "@a/Images/mp-co-logo.png";
import { Link } from "react-router-dom";

export default function Menu(props:any) {
  const { closeMenu } = props;

  return (
    <div className={s.menu}>
      <nav>
        <Link to="/about" onClick={closeMenu}>
          ABOUT
        </Link>
        <Link to="/services" onClick={closeMenu}>
          OUR SERVICES
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          CONTACT US
        </Link>
      </nav>
      <div className={s.m_b}>
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
      </div>
    </div>
  );
}
