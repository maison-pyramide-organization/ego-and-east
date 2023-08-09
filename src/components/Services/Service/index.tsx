import { useRef, useState } from "react";
import { Iservice } from "../../../types/services";
import styles from "../styles.module.scss";
import { ReactComponent as ArrowIcon } from "../../../assets/Icons/arrow.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/close.svg";
import { gsap } from "gsap";

interface Iprops {
    service: Iservice;
}

const Service = (props: Iprops) => {
    const { service } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const serviceRef = useRef(null);
    const button = service.button;

    const handleClick = () => {
        const state = isExpanded;
        setIsExpanded(!state);
        const descriptionEl = containerRef.current! as HTMLElement;
        // IF EXPANDED
        let height: number;
        if (state) {
            height = 0;
        } else {
            height = descriptionEl.scrollHeight;
        }
        descriptionEl.style.height = `${height}px`;
    };

    let tl: any;
    const setTl = () => {
        tl = gsap.timeline({ paused: true });
        const serviceEl = serviceRef.current! as HTMLElement;
        const el = serviceEl.getElementsByTagName("span");
        tl.to(el, {
            y: "-100%",
            duration: 0.3,
            ease: "slow(0.1, 0.4, false)",
            stagger: 0.1,
        });
        tl.set(el, {
            y: "100%",
        });
        tl.to(el, {
            y: "0",
            duration: 0.3,
            ease: "ease-out",
            stagger: 0.1,
        });
        return tl;
    };

    const handleEnter = () => {
        if (isExpanded) return;
        setTl();
        tl.play();
    };
    const handleLeave = () => {
        // tl.revert();
        // tl.reverse();
    };

    return (
        <li className={styles.service} id={service.ref}>
            <div
                className={styles.serviceHeader}
                ref={serviceRef}
                // onMouseEnter={handleEnter}
                // onMouseLeave={handleLeave}
                onClick={handleClick}
            >
                <div className={styles.serviceIndex}>
                    <span>0</span>
                    <span>{service.id}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.headerIcon}>
                    {isExpanded ? (
                        <CloseIcon className={styles.closeIcon} />
                    ) : (
                        <ArrowIcon className={styles.arrowIcon} />
                    )}
                </div>
            </div>
            <div className={styles.descriptionContainer} ref={containerRef}>
                <div className={styles.descriptionWraper}>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    {button && (
                        <button type="button" className={styles.btn}>
                            {service.button}
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
};
export default Service;
