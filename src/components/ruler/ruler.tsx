import s from "./_s.module.scss";

const Ruler = () => {
  return (
    <div className={s.ruler}>
      <span className={s["line1"]} />
      <span className={s["line2"]} />
    </div>
  );
};

export default Ruler;
