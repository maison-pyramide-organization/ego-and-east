import s from "../../_s.module.scss";
import { ReactComponent as Ifb } from "@ic/fb.svg";
import { ReactComponent as Iig } from "@ic/ig.svg";
import { ReactComponent as Itik } from "@ic/tik.svg";

interface Iprops {
  network: any;
}
export default function Network(props: Iprops) {
  const { network } = props;
  const platformIcons = {
    facebook: Ifb,
    tiktok: Itik,
    instagram: Iig,
  };
  console.log(network);

  return (
    <section className={s["s-network"]}>
      <h2>NETWORK</h2>
      <ul>
        {network?.map((item, i) => {
          const Icon = platformIcons[item.fields.platform.toLowerCase()];

          return (
            <li key={i}>
              <div className={s.t}>
                {Icon && <Icon />}
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
                {item.fields.likes && (
                  <div>
                    <p>{item.fields.likes}</p>
                    <span>Likes</span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
