import { useRef, useState } from "react";
import { Iservice } from "../../../types/services";
import styles from "../styles.module.scss";
import { ReactComponent as ArrowIcon } from "../../../assets/Icons/arrow.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/close.svg";

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

    return (
        <li className={styles.service} id={service.ref}>
            <div className={styles.serviceHeader} ref={serviceRef} onClick={handleClick}>
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
