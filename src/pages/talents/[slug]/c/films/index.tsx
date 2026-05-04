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
      <ul>
        {films.map((film) => (
          <li key={film.sys.id}>
            <HoverVideo src={film.fields.file.url} />
            <p>{film.fields.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
