import styles from "../styles.module.scss";
import classNames from "classnames";
import { useRef, useEffect } from "react";



interface Iprops {
    onEnter: (event: Event, nav: HTMLElement) => void;
    onLeave: (nav: HTMLElement) => void;
}

const LeftNav = (props: Iprops) => {
    const { onEnter, onLeave } = props;
    const navRef = useRef(null);
    useEffect(() => {
        const nav = navRef.current! as HTMLElement;
        const handleEnter = (e: Event) => {
            onEnter(e, nav);
        };
        const handleLeave = () => {
            onLeave(nav);
        };
        const linkEls = nav.querySelectorAll(".navLink");
        linkEls.forEach((link) => {
            link.addEventListener("mouseover", handleEnter);
            link.addEventListener("mouseleave", handleLeave);
        });
        return () => {
            linkEls.forEach((link) => {
                link.removeEventListener("mouseover", handleEnter);
                link.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, []);
    return (
        <nav className={styles.nav} ref={navRef}>
            <span className={classNames(styles.line, "line")} />
            <span className={classNames(styles.line, "line")} />
            <a className={classNames(styles.navLink, "navLink")} href="">
                book a talent
            </a>
            <a className={classNames(styles.navLink, "navLink")} href="">
                become a talent
            </a>
        </nav>
    );
};
export default LeftNav;
