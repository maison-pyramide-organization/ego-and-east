import { useEffect } from "react";
import { useEffect } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
// import { IPopupContext, PopupContext } from "../../../context/PopupContext";
import { Link, useLocation } from "react-router-dom";

const LeftNav = () => {
  // const { setPopup } = useContext(PopupContext) as IPopupContext;
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash.slice(1);
    let element = document.getElementById(id)!;

    setTimeout(() => {
      element.scrollIntoView();
      window.scrollBy(0, -100);
    }, 100);
  }, []);

  // const handleContactClick = () => {
  //   setPopup("get in contact");
  // };

  const handleLinkClick = (id: string) => {
    let element = document.getElementById(id)!;
    element.scrollIntoView();
    window.scrollBy(0, -100);
  };

  return (
    <nav className={styles.nav}>
      <Link
        to="/#services"
        className={classNames(styles.navLink, "navLink")}
        onClick={() => handleLinkClick("services")}
      >
        services
      </Link>
      {/* <a
                className={classNames(styles.navLink, "navLink")}
                onClick={() => handleLinkClick("services")}
            >
                services
            </a> */}
      <Link
        to="/#about"
        className={classNames(styles.navLink, "navLink")}
        onClick={() => handleLinkClick("about")}
      >
        about us
      </Link>
      <Link to="/talents">talents</Link>
      {/* <a
        className={classNames(styles.navLink, "navLink")}
        onClick={handleContactClick}
      >
        contact
      </a> */}
    </nav>
  );
};
export default LeftNav;
