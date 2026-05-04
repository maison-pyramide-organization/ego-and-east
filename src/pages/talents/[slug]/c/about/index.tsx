import s from "../../_s.module.scss";
import RichText from "@c/richtext";

interface Iprops {
  talent: any;
}

export default function About(props: Iprops) {
  const { talent } = props;
  return (
    <section className={s["s-hero"]}>
      <h1>{talent.name}</h1>
      <p>
        {talent.title1}
        <span>{talent.title2}</span>
      </p>
      <figure>
        <img src={talent.mainImage?.fields.file.url} alt={talent.name} />
      </figure>
      <div className={s.ab}>
        <h2>
          ABOUT
          <span>{talent.name}</span>
        </h2>
        <div>
          <RichText content={talent.about} />
        </div>
      </div>
    </section>
  );
}