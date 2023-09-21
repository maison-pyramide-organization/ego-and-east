import styles from "../styles.module.scss";
import classNames from "classnames";

const RightNav = () => {
    return (
        <nav className={styles.nav}>
            <a className={classNames(styles.navLink, "navLink")} href="#become_a_talent">
                become a talent
            </a>
            <a className={classNames(styles.navLink, "navLink")} href="#book_a_talent">
                book a talent
            </a>
        </nav>
    );
};

export default RightNav;
