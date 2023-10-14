import styles from "./styles.module.scss";
import image from "../../assets/Images/About.webp";
import classNames from "classnames";

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
                    <p className={styles.text}>
                        Co-founders Reem and Natalya Kanj have propelled Ego & East into one of the
                        most prominent and reputable talent management agencies in the Middle East.
                        The Lebanese sisters and business partners have crafted an innovative
                        approach to talent management, fuelled by positive collaboration and
                        underpinned by strategic insights from 24 years of combined experience
                        spanning from London to the Middle East.
                    </p>
                    <p className={styles.text}>
                        Their distinctively mindful – yet tenacious – approach to brand elevation
                        has seen them featured on the pages of Vogue Business, Emirates Woman, Vogue
                        Arabia, Grazia, and Cosmopolitan. They’ve also built a roster of the
                        region’s most vibrant and distinctive talent.
                    </p>
                    <p className={styles.text}>
                        Ego & East has now embarked on an exciting new adventure, merging with
                        leading agency Maison Pyramide in what is set to be ‘one of the most
                        forward-thinking mergers in the industry’.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
