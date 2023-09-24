import cities from "../../data/cities";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <ul className={styles.citiesList}>
                    {cities.map((city) => (
                        <li key={city.name} className={styles.city}>
                            <h4>{city.name}</h4>
                            <p>{city.address}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.actionsList}>
                    <div className={styles.action}>
                        <h4>
                            want to chat about talent,
                            <br />
                            events, activations?
                        </h4>
                        <button type="button">get in cotact</button>
                    </div>
                    <div className={styles.action}>
                        <h4>want to get scouted?</h4>
                        <button type="button">become a talent</button>
                    </div>
                    <div className={styles.action}>
                        <h4>
                            looking for powerful
                            <br />
                            new talent?
                        </h4>
                        <button type="button">book a talent</button>
                    </div>
                </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.footer_tail}>
                <p className={styles.copyright}>2022 all rights reserved</p>
                <h3 className={styles.company}>
                    A <b>MAISON PYRAMIDE</b> Company
                </h3>
                <ul className={styles.socials}>
                    <li>instagram</li>
                    <li>linkedin</li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
