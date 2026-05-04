import s from "./_s.module.scss";
// import services from "@/data/services";

export default function Services() {
  return (
    <section className={s.s}>
      {/* <div className={s.t}>
        <div className={s.l}>
          <h2>
            OUR
            <span>SERVICES</span>
          </h2>
        </div>
        <div className={s.r}>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <span>{service.id}</span>
                <div>{service.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <p>
        WE COLLABORATE WITH BUSINESSES & BRANDS ON WORLD CLASS CREATIVE
        DIRECTION, STRATEGY & DESIGN.
      </p>
      <a href="mailto:hello@egoandeast.co" target="_blank">
        GET IN TOUCH
      </a>
    </section>
  );
}
