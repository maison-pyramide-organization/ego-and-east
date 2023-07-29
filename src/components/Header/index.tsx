import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import LeftNav from "./Left Nav";
import RightNav from "./Right Nav";

const Header = () => {
    const onEnter = (e: Event, nav: HTMLElement) => {
        const lineEls = nav.querySelectorAll(".line") as NodeListOf<HTMLElement>;
        const linkEl = e.target as HTMLElement;
        const offset = linkEl.offsetLeft;
        const width = linkEl.clientWidth;
        lineEls.forEach((lineEl) => {
            lineEl.style.width = width + "px";
            lineEl.style.transform = `translateX(${offset}px)`;
        });
    };

    const onLeave = (nav: HTMLElement) => {
        const lineEls = nav.querySelectorAll(".line") as NodeListOf<HTMLElement>;
        lineEls.forEach((lineEl) => {
            lineEl.style.width = "100%";
            lineEl.style.transform = `translateX(0)`;
        });
    };
    return (
        <header className={styles.header}>
            <LeftNav onEnter={onEnter} onLeave={onLeave} />

            <div className={styles.logoContainer}>
                <img src={logo} alt="EGO & EAST LOGO" className={styles.logo} />
            </div>
            <RightNav onEnter={onEnter} onLeave={onLeave} />
        </header>
    );
};
export default Header;
