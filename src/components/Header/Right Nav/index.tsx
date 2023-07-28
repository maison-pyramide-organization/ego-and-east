import styles from "../styles.module.scss";
import { useState } from "react";
import classNames from "classnames";

const RightNav = () => {
    const [active, setActive] = useState<string | null>(null);

    const handleMouseEnter = (e: any) => {
        const target = e.target as HTMLElement;
        const activeId = target.dataset.id!;
        setActive(activeId);
    };
    const handleMouseLeave = () => {
        setActive(null);
    };
    const lineClass = (index: string, position: string) => {
        const mainClass = styles[`${position}Line`];
        if (!active || index == active) return classNames(mainClass);
        if (index > active) return classNames(mainClass, styles[`left${index}`]);
        if (index < active) return classNames(mainClass, styles[`right${index}`]);
    };
    return (
        <nav className={styles.nav}>
            <a
                data-id="1"
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.newNavLink}
                id={styles.book}
                href=""
            >
                <span className={lineClass("1", "top")}></span>
                our services
                <span className={lineClass("1", "bottom")}></span>
            </a>
            <a
                data-id="2"
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.newNavLink}
                href=""
            >
                <span className={lineClass("2", "top")}></span>
                about us
                <span className={lineClass("2", "bottom")}></span>
            </a>
            <a
                data-id="3"
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.newNavLink}
                href=""
            >
                <span className={lineClass("3", "top")}></span>
                contact us
                <span className={lineClass("3", "bottom")}></span>
            </a>
        </nav>
    );
};
export default RightNav;
