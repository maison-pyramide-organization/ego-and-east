import { useContext } from "react";
import cities from "../../data/cities";
import styles from "./styles.module.scss";
import { IPopupContext, PopupContext } from "../../context/PopupContext";
import { ReactComponent as MpCompanyLogo } from "../../assets/MP Company logo.svg";

const Footer = () => {
    const { setPopup } = useContext(PopupContext) as IPopupContext;

    const openPopup = (popup: string) => {
        setPopup(popup);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <ul className={styles.citiesList}>
                    {cities.map((city) => (
                        <li key={city.name} className={styles.city}>
                            <h4>{city.name}</h4>
                            <p>{city.email}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.action}>
                    <h4>
                        want to chat about talent,
                        <br />
                        events, activations?
                    </h4>
                    <button type="button" onClick={() => openPopup("get in contact")}>
                        get in contact
                    </button>
                </div>
                <div className={styles.action}>
                    <h4>want to get scouted?</h4>
                    <button type="button" onClick={() => openPopup("become a talent")}>
                        become a talent
                    </button>
                </div>
                <div className={styles.action}>
                    <h4>looking for powerful new talent?</h4>
                    <button type="button" onClick={() => openPopup("book a talent")}>
                        book a talent
                    </button>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.footer_tail}>
                <p className={styles.copyright}>2022 all rights reserved</p>

                <a
                    href="https://maisonpyramide.com/"
                    target="_blank"
                    className={styles.logoContainer}
                >
                    <MpCompanyLogo className={styles.companyLogo} />
                </a>
                <ul className={styles.socials}>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/egoandeast/">
                            instagram
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/company/maison-pyramide/">
                            linkedin
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
