import styles from "./styles.module.scss";
import image from "../../assets/Images/about.png";

const About = () => {
    return (
        <section className={styles.about}>
            <h1 className={styles.title}>about ego & east</h1>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={image} alt="" className={styles.image} />
                </div>
                <div className={styles.aboutInfo}>
                    <h4 className={styles.infoTitle}>
                        Co-founded by sisters, Reem & Natalya Kanj, Ego & East is one of the most
                        prominent and reputable talent management agencies in the Middle East
                    </h4>
                    <p className={styles.infoDescription}>
                        Transferring their industry knowledge from London to the Middle East, the
                        Lebanese sisters and business partners have used their combined 24 years of
                        experience to create an innovative approach to talent management—an
                        achievement that’s seen them featured on the pages of Vogue Business,
                        Emirates Woman, Vogue Arabia, Grazia, and Cosmopolitan. Their distinctively
                        mindful—yet tenacious—approach to business has gained them a roster of the
                        region’s most exciting talent. Recently Ego & East embarked on a new and
                        exciting adventure, merging in October 2022 with esteemed agency Maison
                        Pyramide in what is set to be ‘one of the most forward-thinking mergers in
                        the industry’.
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
