import { useContext } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import { IPopupContext, PopupContext } from "../../../context/PopupContext";

const LeftNav = () => {
    const { setPopup } = useContext(PopupContext) as IPopupContext;

    const handleContactClick = () => {
        setPopup("get in contact");
    };
    return (
        <nav className={styles.nav}>
            <a className={classNames(styles.navLink, "navLink")} href="#services">
                services
            </a>
            <a className={classNames(styles.navLink, "navLink")} href="#about">
                about us
            </a>
            <a className={classNames(styles.navLink, "navLink")} onClick={handleContactClick}>
                contact
            </a>
        </nav>
    );
};
export default LeftNav;
