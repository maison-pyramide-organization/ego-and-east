import s from "./_s.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BLogoI } from "@a/b-logo.svg";
// import { ReactComponent as WLogoI } from "@a/w-logo.svg";

export default function Header() {
  const { pathname } = useLocation();
  console.log("pn", pathname);

  return (
    <header className={s.h}>
      <Link to="/" className={s.lo}>
        <BLogoI />
      </Link>
      <nav className="d-o">
        <Link to="/about">ABOUT US</Link>
        <Link to="#services">OUR SERVICES</Link>
        <Link to="/contact">CONTACT US</Link>
      </nav>
    </header>
  );
}
