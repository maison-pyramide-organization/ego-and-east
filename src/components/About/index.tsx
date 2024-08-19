import styles from "./styles.module.scss";
import image from "../../assets/Images/about.webp";
import classNames from "classnames";

const About = () => {
  return (
    <section className={classNames(styles.about, "section")} id="about">
      <h1 className={classNames("title")}>about ego & east</h1>
      <div className={styles.container}>
        {/* IMAGE CONTAINER */}
        <div className={styles.imageContainer}>
          <img src={image} alt="" className={styles.image} />
        </div>
        {/* IMAGE CONTAINER */}
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Reem and Natalya Kanj, Lebanese sisters and business partners, have
            propelled Ego & East into one of the most prominent and reputable
            talent management and booking agencies in the Middle East. Their
            innovative approach to talent management, influenced by their
            extensive experience in London and the MENA region, has solidified
            Ego & East as a leader in Middle East and GCC talent management,
            particularly within the KSA. Ego & East connects top luxury, beauty,
            and fashion brands with the most compelling talent across the MENA
            region, including influencers, celebrities, actors, musicians, and
            creatives. As a celebrity and brand ambassador management agency,
            they specialize in elevating brands through influencer marketing and
            strategic talent partnerships.
          </p>
          <p className={styles.text}>
            Their distinctively mindful – yet tenacious – approach to brand
            elevation has earned them features in leading publications such as
            Vogue Business, Emirates Woman, Vogue Arabia, Grazia, and
            Cosmopolitan. Additionally, they have been recognized for their
            expertise in fashion week services and invited to guest lecture at
            Istituto Marangoni, one of the world's most prestigious fashion
            schools.
          </p>
          <p className={styles.text}>
            Recently, Ego & East embarked on an exciting new venture, merging
            with the leading agency Maison Pyramide. This partnership is set to
            become ‘one of the most forward-thinking mergers in the talent
            management and influencer marketing industry’.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
