import styles from "./styles.module.scss";
import image from "../../assets/Images/hero.png";
const Hero = () => {
    return (
        <main className={styles.hero}>
            <div className={styles.heroWraper}>
                <div className={styles.imageContainer}>
                    <img src={image} className={styles.image} alt="EGO & EAST" />
                </div>
                <h1 className={styles.title}>Zeyne x YUNG & Miu Miu</h1>
            </div>
            <p className={styles.info}>
                A <span>maison pyramide</span> company
            </p>
        </main>
    );
};
export default Hero;
