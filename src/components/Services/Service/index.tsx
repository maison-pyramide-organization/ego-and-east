import { useRef, useState, useContext } from "react";
import { Iservice } from "../../../types/services";
import styles from "../styles.module.scss";
import { ReactComponent as ChevronIcon } from "../../../assets/Icons/down chevron.svg";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/close.svg";
import { IPopupContext, PopupContext } from "../../../context/PopupContext";

interface Iprops {
    service: Iservice;
}

const Service = (props: Iprops) => {
    const { service } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);
    const serviceRef = useRef(null);
    const button = service.button;
    const { setPopup } = useContext(PopupContext) as IPopupContext;

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

    const openPopup = (popup: string) => {
        setPopup(popup);
    };

    return (
        <li className={styles.service} id={service.ref}>
            <div className={styles.serviceHeader} ref={serviceRef} onClick={handleClick}>
                <h3 className={styles.serviceTitle}>
                    <span className={styles.serviceIndex}>0{service.id}</span>
                    {service.title}
                </h3>
                <div className={styles.headerIcon}>
                    {isExpanded ? <CloseIcon /> : <ChevronIcon />}
                </div>
            </div>
            <div className={styles.descriptionContainer} ref={containerRef}>
                <div className={styles.descriptionWraper}>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    {button && (
                        <button
                            type="button"
                            className={styles.btn}
                            onClick={() => openPopup(service.popup!)}
                        >
                            {service.button}
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
};
export default Service;
