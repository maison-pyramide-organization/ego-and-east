import styles from "./styles.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import { IPopupContext, PopupContext } from "../../context/PopupContext";
import Header from "./Header";
import Form from "./Form";

const Popup = () => {
    const { popup, setPopup } = useContext(PopupContext) as IPopupContext;

    if (!popup) return null;
    document.body.classList.toggle("disable-scroll");

    const closePopup = () => {
        document.body.classList.toggle("disable-scroll");
        setPopup(null);
    };


    return (
        <div className={styles.overlay}>
            <div className={classNames(styles.popup, "disable-scroll")}>
                <Header close={closePopup} />
                <main className={styles.popupBody}>
                    <h2 className={styles.popupTitle}>{popup}</h2>
                    <Form popup={popup} />
                </main>
            </div>
        </div>
    );
};
export default Popup;
