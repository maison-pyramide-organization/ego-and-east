import styles from "../styles.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/close.svg";

interface Iprops {
    close: () => void;
}
const Header = (props: Iprops) => {
    const { close } = props;
    return (
        <div className={styles.popupHeader}>
            {/* LOGO */}
            <div className={styles.logoContainer}>
                <Logo className={styles.logo} />
                <h5 className={styles.logoText}>
                    A <span className={styles.logoTextBold}>maison pyramide</span> company
                </h5>
            </div>

            {/* CLOSE ICON */}
            <CloseIcon className={styles.closeIcon} onClick={close} />
        </div>
    );
};
export default Header;
