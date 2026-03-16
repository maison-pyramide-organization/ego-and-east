import { Link } from "react-router-dom";
import s from "./_s.module.scss";
import { ReactComponent as LogoI } from "@a/logo.svg";

export default function Header() {
  return (
    <header className={s.h}>
      <div className={s.lo}>
        <LogoI />
      </div>
      <nav>
        <Link to="/about">ABOUT US</Link>
        <Link to="#services">OUR SERVICES</Link>
        <Link to="/contact">CONTACT US</Link>
      </nav>
    </header>
  );
}
