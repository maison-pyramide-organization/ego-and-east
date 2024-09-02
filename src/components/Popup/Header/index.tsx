import s from "../styles.module.scss";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/close.svg";
import logo from "../../../assets/Images/mp-co-logo.png";

interface Iprops {
  close: () => void;
}
const Header = (props: Iprops) => {
  const { close } = props;
  return (
    <div className={s.popupHeader}>
      {/* LOGO */}
      <div className={s.logoContainer}>
        <Logo className={s.logo} />
        <img className={s["mp-co-logo"]} src={logo} alt="Maison Pyramide" />
      </div>

      {/* CLOSE ICON */}
      <CloseIcon className={s.closeIcon} onClick={close} />
    </div>
  );
};
export default Header;
