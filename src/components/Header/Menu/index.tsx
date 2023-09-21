import styles from "./styles.module.scss";
import classNames from "classnames";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={classNames(styles.menu_wrapper, "hide-scrollbar")}>
                <ul className={styles.menu_nav}>
                    <li>about us</li>
                    <li>our services</li>
                    <li>become a talent</li>
                    <li>book a talent</li>
                    <li>contact us</li>
                </ul>

                <div className={styles.menu_contact}>
                    <h4>want to get in touch with us about our services</h4>
                    <button type="button">get in contact</button>
                </div>

                <ul className={styles.socials}>
                    <li>instagram</li>
                    <li>linkedin</li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;
