import s from "../../_s.module.scss";

interface Iprops {
  talks: any[];
  talksBanner: any;
  talksIntro: string;
}

export default function Talks(props: Iprops) {
  const { talks, talksBanner, talksIntro } = props;

  return (
    <section className={s["s-talks"]}>
      <h2>
        TALKS
        <span>AND PANELS</span>
      </h2>
      <figure>
        <img src={talksBanner.fields.file.url} alt="" />
      </figure>
      <p>{talksIntro}</p>
      <ul className="h-s">
        {talks?.map((talk) => (
          <li key={talk.sys.id}>
            <figure>
              <img src={talk.fields.file.url} alt="" />
            </figure>
            <h4>{talk.fields.title}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
