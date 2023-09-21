import styles from "../styles.module.scss";
import classNames from "classnames";

const LeftNav = () => {
    return (
        <nav className={styles.nav}>
                <a className={classNames(styles.navLink, "navLink")} href="#services">
                    services
                </a>
                <a className={classNames(styles.navLink, "navLink")} href="#about">
                    about us
                </a>
                <a className={classNames(styles.navLink, "navLink")} href="#contact">
                    contact
                </a>
        </nav>
    );
};
export default LeftNav;
