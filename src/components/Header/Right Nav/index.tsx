import { useContext } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import { IPopupContext, PopupContext } from "../../../context/PopupContext";

const RightNav = () => {
    const { setPopup } = useContext(PopupContext) as IPopupContext;
    const openBookATalent = () => {
        setPopup("book a talent");
    };

    const openBecomeATalent = () => {
        setPopup("become a talent");
    };
    return (
        <nav className={styles.nav}>
            <a className={classNames(styles.navLink, "navLink")} onClick={openBecomeATalent}>
                become a talent
            </a>
            <a className={classNames(styles.navLink, "navLink")} onClick={openBookATalent}>
                book a talent
            </a>
        </nav>
    );
};

export default RightNav;
