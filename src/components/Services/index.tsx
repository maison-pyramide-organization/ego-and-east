import { Fragment, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Service from "./Service";
import classNames from "classnames";
import getServices from "../../services/api/getServices";
import { Iservice } from "../../types/services";

const Services = () => {
  const [services, setServices] = useState<null | Iservice[]>(null);

  useEffect(() => {
    getServices().then((services: any) => {
      services.sort((a: any, b: any) => a.index - b.index);
      setServices(services);
    });
  }, []);
  return (
    <section className={classNames(styles.services, "section")} id="services">
      <h1 className={styles.title}>our services</h1>
      <div className={styles.servicesList}>
        {services &&
          services.map((service) => (
            <Fragment key={service.index}>
              <Service service={service} />
            </Fragment>
          ))}
      </div>
    </section>
  );
};
export default Services;
