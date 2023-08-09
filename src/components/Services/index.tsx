import { Fragment } from "react";
import services from "../../data/services";
import styles from "./styles.module.scss";
import Service from "./Service";
import classNames from "classnames";

const Services = () => {
    return (
        <section className={classNames(styles.services, "section")} id="services">
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
