import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { IPopupContext, PopupContext } from "../../../context/PopupContext";
import { Link, useLocation } from "react-router-dom";

interface Iprops {
  closeMenu: () => void;
}
const Menu = (props: Iprops) => {
  const { closeMenu } = props;
  const { setPopup } = useContext(PopupContext) as IPopupContext;
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.slice(1);
    let element = document.getElementById(id)!;

    setTimeout(() => {
      element.scrollIntoView();
      window.scrollBy(0, -100);
    }, 100);
  }, [hash]);

  const handleClick = (popup: string) => {
    setPopup(popup);
    closeMenu();
  };

  const handleLinkClick = (id: string) => {
    let element = document.getElementById(id)!;
    element.scrollIntoView();
    window.scrollBy(0, -100);
  };

  return (
    <div className={styles.menu}>
      <div className={classNames(styles.menu_wrapper, "hide-scrollbar")}>
        <ul className={styles.menu_nav}>
          <li onClick={closeMenu}>
            <Link to="/#about" onClick={() => handleLinkClick("about")}>
              about us
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/#services" onClick={() => handleLinkClick("services")}>
              our services
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/talents">talents</Link>
          </li>
          <li onClick={() => handleClick("become a talent")}>
            <a>become a talent</a>
          </li>
          <li onClick={() => handleClick("book a talent")}>
            <a>book a talent</a>
          </li>
          <li onClick={() => handleClick("get in contact")}>
            <a>contact us</a>
          </li>
        </ul>

        <div className={styles.menu_contact}>
          <h4>want to get in contact with us about our services</h4>
          <button type="button" onClick={() => handleClick("get in contact")}>
            get in contact
          </button>
        </div>

        <ul className={styles.socials}>
          <li>
            <a href="https://www.instagram.com/egoandeast/">instagram</a>
          </li>
          <li>
            <a href="">linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
