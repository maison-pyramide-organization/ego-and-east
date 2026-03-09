import s from "../../_s.module.scss";

interface Iprops {
  network: any;
}
export default function Network(props: Iprops) {
  const { network } = props;
  return (
    <section className={s["s-network"]}>
      <h2>NETWORK</h2>
      <ul>
        {network?.map((item, i) => (
          <li key={i}>
            <div className={s.t}>
              <h3>{item.fields.platform}</h3>
            </div>
            <div className={s.b}>
              <div>
                <p>{item.fields.followers}</p>
                <span>Followers</span>
              </div>
              <div>
                <p>{item.fields.ageRange}</p>
                <span>Age Range</span>
              </div>
              <div>
                <p>{item.fields.female}</p>
                <span>Female</span>
              </div>
              {item.fields.locations && (
                <div>
                  <p>{item.fields.locations}</p>
                  <span>Locations</span>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
