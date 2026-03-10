import ExpandableText from "../expandable text";
import s from "./_s.module.scss";

interface Iprops {
  section: any;
}
export default function TS01(props: Iprops) {
  const { section } = props;
  const { gallery, title, label, description } = section;

  return (
    <section className={s.s}>
      <h2>
        {label}
        <span>{title}</span>
      </h2>
      <div>
        <div className={s.l}>
          <figure>
            <img src={gallery[0].fields.file.url} alt="" />
          </figure>
          <div className={`${s.text} m-o`}>
            <ExpandableText text={description} maxLength={362} />
          </div>
        </div>
        <div className={s.r}>
          <div className={s.t}>
            <figure>
              <img src={gallery[1].fields.file.url} alt="" />
            </figure>
            <figure>
              <img src={gallery[2].fields.file.url} alt="" />
            </figure>
          </div>
          <p className="d-o">{description}</p>
        </div>
      </div>
      {/* <ul>
        {gallery?.map((img, i) => (
          <li key={i}>
            <img src={img.fields.file.url} alt="" />
          </li>
        ))}
      </ul> */}
    </section>
  );
}
