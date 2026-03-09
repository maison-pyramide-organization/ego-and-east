import s from "./_s.module.scss";

interface Iprops {
  section: any;
}
export default function TS01(props: Iprops) {
  const { section } = props;

  return (
    <section className={s.s}>
      <h2>
        {section.label}
        <span>{section.title}</span>
      </h2>
      <ul>
        {section.gallery?.map((img) => (
          <li>
            <img src={img.fields.file.url} alt="" />
          </li>
        ))}
      </ul>
      <p>{section.description}</p>
    </section>
  );
}
