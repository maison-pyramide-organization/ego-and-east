import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Down = () => {
    return (
        <main>
            <Logo className={styles.logo} />
            <a href="https://maisonpyramide.com/" target="_blank" className={styles.company}>
                a <b>MAISON PYRAMIDE</b> company
            </a>
            <h1 className={styles.title}> coming soon</h1>
            <ul className={styles.socials}>
                <li>
                    <a href="https://www.instagram.com/egoandeast/">instagram</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/maison-pyramide">linkedin</a>
                </li>
            </ul>
        </main>
    );
};
export default Down;
