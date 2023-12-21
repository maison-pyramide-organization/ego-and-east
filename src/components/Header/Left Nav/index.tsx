import { useContext } from "react";
import styles from "../styles.module.scss";
import classNames from "classnames";
import { IPopupContext, PopupContext } from "../../../context/PopupContext";

const LeftNav = () => {
    const { setPopup } = useContext(PopupContext) as IPopupContext;

    const handleContactClick = () => {
        setPopup("get in contact");
    };

    const handleLinkClick = (id: string) => {
        let element = document.getElementById(id)!;
        element.scrollIntoView();
        window.scrollBy(0, -100);
    };

    return (
        <nav className={styles.nav}>
            <a
                className={classNames(styles.navLink, "navLink")}
                onClick={() => handleLinkClick("services")}
            >
                services
            </a>
            <a
                className={classNames(styles.navLink, "navLink")}
                onClick={() => handleLinkClick("about")}
            >
                about us
            </a>
            <a className={classNames(styles.navLink, "navLink")} onClick={handleContactClick}>
                contact
            </a>
        </nav>
    );
};
export default LeftNav;
