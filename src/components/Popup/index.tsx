import styles from "./styles.module.scss";
import classNames from "classnames";
import { useContext, useState } from "react";
import { IPopupContext, PopupContext } from "../../context/PopupContext";
import Header from "./Header";
import Form from "./Form";

const Popup = () => {
  const { popup, setPopup } = useContext(PopupContext) as IPopupContext;
  const [isSent, setIsSent] = useState(false);

  if (!popup) return null;
  document.body.classList.add("disable-scroll");

  const closePopup = () => {
    document.body.classList.remove("disable-scroll");
    setPopup(null);
    setIsSent(false);
  };

  const bodyClasses = isSent
    ? classNames(styles.popupBody, styles.hide)
    : classNames(styles.popupBody);

  const sentContainerClasses = isSent
    ? classNames(styles.sent_container)
    : classNames(styles.sent_container, styles.hide);

  const viewSentMessage = () => {
    setIsSent(true);
    setTimeout(closePopup, 2500);
  };

  return (
    <div className={styles.overlay}>
      <div className={classNames(styles.popup, "disable-scroll")}>
        <Header close={closePopup} />

        <main className={bodyClasses}>
          <h2 className={styles.popupTitle}>{popup}</h2>
          <Form popup={popup} viewSentMessage={viewSentMessage} />
        </main>


        {/* MESSAGE SENT */}
        <div className={sentContainerClasses}>
          <h3 className={styles.sent_text}>We’ve received your message!</h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
