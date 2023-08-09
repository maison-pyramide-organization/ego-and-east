import styles from "./styles.module.scss";
import image from "../../assets/Images/about.png";
import classNames from "classnames";
import { aboutText, aboutSubtext } from "../../data/about";

const About = () => {
    return (
        <section className={classNames(styles.about, "section")} id="about">
            <h1 className={styles.title}>about ego & east</h1>
            <div className={styles.container}>
                {/* IMAGE CONTAINER */}
                <div className={styles.imageContainer}>
                    <img src={image} alt="" className={styles.image} />
                </div>
                {/* IMAGE CONTAINER */}
                <div className={styles.textContainer}>
                    <h4 className={styles.text}>{aboutText}</h4>
                    <p className={styles.subtext}>{aboutSubtext}</p>
                </div>
            </div>
        </section>
    );
};
export default About;
