import HoverVideo from "@/components/video";
import s from "../../_s.module.scss";

interface Iprops {
  films: any[];
}

export default function Films(props: Iprops) {
  const { films } = props;

  return (
    <section className={s["s-films"]}>
      <h2>
        FILM
        <span>& TV</span>
      </h2>
      <div>
        <div className={s.l}>
          <figure>
            <HoverVideo src={films[0].fields.file.url} />
            <figcaption>{films[0].fields.title}</figcaption>
          </figure>
        </div>
        <div className={s.r}>
          <figure>
            <HoverVideo src={films[1].fields.file.url} />
            <figcaption>{films[1].fields.title}</figcaption>
          </figure>
          <figure>
            <HoverVideo src={films[2].fields.file.url} />
            <figcaption>{films[2].fields.title}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
