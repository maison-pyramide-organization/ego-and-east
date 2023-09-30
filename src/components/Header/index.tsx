import styles from "./styles.module.scss";
import LeftNav from "./Left Nav";
import RightNav from "./Right Nav";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import Menu from "./Menu";
import classNames from "classnames";
import { ReactComponent as HumIcon } from "../../assets/Icons/hum.svg";
import { ReactComponent as CloseIcon } from "../../assets/Icons/close.svg";

const Header = () => {
    const [menuOpend, setMenuOpened] = useState(false);

    const toogleMenu = () => {
        document.body.classList.toggle("disable-scroll");
        setMenuOpened((prev) => !prev);
    };

    const logoClasses = menuOpend
        ? classNames(styles.logo, styles.lightLogo)
        : classNames(styles.logo);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_wrapper}>
                    <LeftNav />
                    <div className={styles.logoContainer}>
                        <Logo className={logoClasses} />
                    </div>
                    <RightNav />

                    <div className={styles.menuIcon} onClick={toogleMenu}>
                        {menuOpend ? (
                            <CloseIcon className={styles.closeIcon} />
                        ) : (
                            <HumIcon className={styles.humIcon} />
                        )}
                    </div>
                </div>
            </header>
            {menuOpend && <Menu closeMenu={toogleMenu} />}
        </>
    );
};
export default Header;
