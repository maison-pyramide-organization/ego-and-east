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
        <li className={styles.service}>
            <div className={styles.serviceHeader}>
                <h3 className={styles.serviceTitle}>
                    <span className={styles.serviceId}>0{service.id}</span>
                    {service.title}
                </h3>
                <div className={styles.headerIcon} onClick={handleClick}>
                    {isExpanded ? (
                        <CloseIcon className={styles.closeIcon} />
                    ) : (
                        <ArrowIcon className={styles.arrowIcon} />
                    )}
                </div>
            </div>
            <div className={styles.descriptionContainer} ref={containerRef}>
                <p className={styles.serviceDescription}>{service.description}</p>
            </div>
        </li>
    );
};
export default Service;
