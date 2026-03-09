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
        {films?.map((brand) => (
          <li key={brand.sys.id}>
            <figure>
              <HoverVideo src={brand.fields.file.url} />
              <figcaption>{brand.fields.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
