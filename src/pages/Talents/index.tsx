import s from "./_s.module.scss";
import img from "../../assets/Images/talent.png";
import { useEffect, useState } from "react";
import getTalents from "../../services/api/getTalents";
import animate from "./_animate";

const Talents = () => {
  const [talents, setTalents] = useState(null) as any;

  useEffect(() => {
    getTalents().then((talents) => {
      setTalents(talents);
    });
  }, []);
  useEffect(() => {
    animate();
  }, [talents]);

  if (!talents) return null;
  return (
    <div className={s["p"]}>
      <div className={s["img-w"]}>
        {talents.map((talent) => (
          <img
            key={talent.index}
            id="image"
            data-id={talent.index}
            src={talent.image.asset.url}
            alt={talent.name}
          />
        ))}
      </div>
      <div className={s["list-w"]}>
        <ul id="list" className={s["list"]}>
          {talents.map((talent) => (
            <li data-id={talent.index} className={s.talent} key={talent.index}>
              <h2>{talent.name}</h2>
              <span>{talent.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Talents;
