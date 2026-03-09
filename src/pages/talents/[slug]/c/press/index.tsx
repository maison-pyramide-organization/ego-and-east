import s from "../../_s.module.scss";

interface Iprops {
  press: any[];
}

export default function Press(props: Iprops) {
  const { press } = props;

  return (
    <section className={s["s-press"]}>
      <h2>
        IN THE <span>PRESS</span>
      </h2>
      <ul className="h-s">
        {press.map((item, i) => (
          <li key={i}>
            <figure>
              <img src={item.fields.file.url} alt="" />
            </figure>
            <figcaption>{item.fields.title}</figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
