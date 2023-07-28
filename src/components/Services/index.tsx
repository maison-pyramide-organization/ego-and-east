import { Fragment } from "react";
import services from "../../data/services";
import styles from "./styles.module.scss";
import Service from "./Service";

const Services = () => {
    return (
        <section className={styles.services}>
            <h1 className={styles.title}>our services</h1>
            <div className={styles.servicesList}>
                {services.map((service) => (
                    <Fragment key={service.id}>
                        <Service service={service} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
};
export default Services;
