import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="" className={styles.navLink}>
                    book a talent
                </a>
                <a href="" className={styles.navLink}>
                    become a talent
                </a>
            </nav>

            <div className={styles.logoContainer}>
                <img src={logo} alt="EGO & EAST LOGO" className={styles.logo} />
            </div>

            <nav className={styles.nav}>
                <a href="" className={styles.navLink}>
                    our services
                </a>
                <a href="" className={styles.navLink}>
                    about us
                </a>
                <a href="" className={styles.navLink}>
                    contact us
                </a>
            </nav>
        </header>
    );
};
export default Header;
