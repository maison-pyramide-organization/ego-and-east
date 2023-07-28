import styles from "../styles.module.scss";
import { useState } from "react";
import classNames from "classnames";

const LeftNav = () => {
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
        <nav className={styles.newNav}>
            <a
                data-id="1"
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.newNavLink}
                id={styles.book}
                href=""
            >
                <span className={lineClass("1", "top")}></span>
                book a talent
                <span className={lineClass("1", "bottom")}></span>
            </a>
            <div className={styles.space}>
                <span className={lineClass("2", "top")}></span>
                <span className={lineClass("2", "bottom")}></span>
            </div>
            <a
                data-id="3"
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id={styles.become}
                className={styles.newNavLink}
                href=""
            >
                <span className={lineClass("3", "top")}></span>
                become a talent
                <span className={lineClass("3", "bottom")}></span>
            </a>
        </nav>
    );
};
export default LeftNav;
