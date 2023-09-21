import styles from "./styles.module.scss";
import LeftNav from "./Left Nav";
import RightNav from "./Right Nav";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import Menu from "./Menu";
import classNames from "classnames";

const Header = () => {
    const [menuOpend, setMenuOpened] = useState(false);
    const toogleMenu = () => {
        document.body.classList.toggle("disable-scroll");
        if (!menuOpend) {
            console.log("opening menu");
            setMenuOpened(true);
        } else {
            console.log("closing menu");
            setMenuOpened(false);
        }
    };

    const logoClasses = menuOpend
        ? classNames(styles.logo, styles.lightLogo)
        : classNames(styles.logo);

    const menuIconClasses = menuOpend
        ? classNames(styles.menuIcon, styles.lightIcon)
        : classNames(styles.menuIcon);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_wrapper}>
                    <LeftNav />
                    <div className={styles.logoContainer}>
                        <Logo className={logoClasses} />
                    </div>
                    <RightNav />

                    <div className={menuIconClasses} onClick={toogleMenu}>
                        <span id="bar_1"></span>
                        <span id="bar_2"></span>
                    </div>
                </div>
            </header>
            {menuOpend && <Menu />}
        </>
    );
};
export default Header;
