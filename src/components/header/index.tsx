import s from "./_s.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BLogoI } from "@a/b-logo.svg";
import { useState } from "react";
import Menu from "./menu";
// import { useState } from "react";
// import { ReactComponent as WLogoI } from "@a/w-logo.svg";

export default function Header() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isTalentsPage =
    pathname.startsWith("/talents/") && pathname !== "/talents";

  if (isTalentsPage) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header id="h" className={isOpen ? `${s.h} ${s.open}` : s.h}>
        <Link to="/" className={s.lo}>
          <BLogoI />
        </Link>
        <nav className="d-o">
          <Link to="/about">ABOUT US</Link>
          <Link to="#services">OUR SERVICES</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
        <button className="m-o" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </header>
      {isOpen && <Menu closeMenu={closeMenu} />}
    </>
  );
}
