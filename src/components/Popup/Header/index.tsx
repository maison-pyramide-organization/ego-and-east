import styles from "../styles.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/close.svg";
import { ReactComponent as MpCompanyLogo } from "../../../assets/MP Company logo.svg";

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
                <MpCompanyLogo className={styles.MpCompanyLogo} />
            </div>

            {/* CLOSE ICON */}
            <CloseIcon className={styles.closeIcon} onClick={close} />
        </div>
    );
};
export default Header;
