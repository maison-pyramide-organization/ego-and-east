import s from "../../_s.module.scss";

interface Iprops {
  bof: any;
}
export default function Bof(props: Iprops) {
  const { bof } = props;
  return (
    <section className={s["s-bof"]}>
      <h2>
        BOF <span>500</span>
      </h2>
      <div>
        <figure>
          <img src={bof[0].fields.file.url} alt="" />
          <figcaption>{bof[0].fields.description}</figcaption>
        </figure>
        <figure>
          <img src={bof[1].fields.file.url} alt="" />
        </figure>
      </div>
    </section>
  );
}
