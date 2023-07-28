import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import LeftNav from "./Left Nav";
import RightNav from "./Right Nav";

const Header = () => {
    // useEffect(() => {
    //     const navEls = document.querySelectorAll(".newNavLink");
    //     console.log(navEls);
    //     navEls.forEach((el) => {
    //         el.addEventListener("mouseenter", (e) => {
    //             console.log(e.target.dataset.id);
    //         });
    //     });
    // }, []);



    return (
        <header className={styles.header}>
            <LeftNav/>

            <div className={styles.logoContainer}>
                <img src={logo} alt="EGO & EAST LOGO" className={styles.logo} />
            </div>
            <RightNav/>

        </header>
    );
};
export default Header;
