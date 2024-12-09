import s from "./_s.module.scss";
import { useEffect, useState } from "react";
import getTalents from "../../services/api/getTalents";
import animate from "./_animate";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Talents = () => {
  const [talents, setTalents] = useState(null) as any;
  const [ft, setFt] = useState(null) as any;

  useEffect(() => {
    getTalents().then((talents) => {
      setTalents(talents);
      setFt(talents);
    });
  }, []);

  useEffect(() => {
    if (ft?.length) animate();
  }, [talents]);

  if (!talents) return null;

  return (
    <>
      <Header />
      <div className={s.w} id="w">
        {/* Page */}
        <div id="img-w" className={s["img-w"]}>
          {ft?.map((talent) => (
            <img
              key={talent.index}
              id="image"
              data-id={talent.index}
              src={talent.image.asset.url}
              alt={talent.name}
            />
          ))}
        </div>

        <div id="p" className={s["p"]}>
          {/* IMAGES */}

          {/* NAMES LIST */}
          <div id="list-w" className={s["list-w"]}>
            <ul id="list" className={s["list"]}>
              {ft?.map((talent, i) => (
                <li
                  id={`item${i}`}
                  data-id={talent.index}
                  className={s.talent}
                  key={talent.name}
                >
                  <Link to={`/talents/${talent.slug.current}`}>
                    <h2>{talent.name}</h2>
                    <span>{talent.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Talents;
